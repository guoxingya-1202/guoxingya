'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [lastPushDate, setLastPushDate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getSomething() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('111111');
          resolve();
        }, 2000);
      });
    }
    getSomething().then(
      result => console.log('Async function finished successfully with result:', result)
    );
    console.log('2222222');

    async function getLastPushedDate(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const data = await response.json();
        // pushed_at 字段即为最后一次推送日期
        return data.pushed_at as string;
      } catch (error) {
        console.error('获取推送日期失败:', error);
        return null;
      }
    }

    getLastPushedDate('yangjh-xbmu', 'Web-develop').then(date => {
      console.log('最后一次推送日期:', date);
      setLastPushDate(date);
      setIsLoading(false);
      if (!date) {
        setError('获取数据失败');
      }
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 text-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkYzI2MjYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTIyIDIyYzAtNi4wNCA0Ljk2LTEwIDEwLTE8czkuOTYgOCAxOCAwIDggNC45NiAyMiAxMC04LTQuOTYtMTgtMTB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-red-600 hover:text-red-700 transition-all bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-red-200 hover:shadow-xl hover:border-red-300">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold">返回首页</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-rose-100 text-red-700 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-red-200 shadow-lg backdrop-blur-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              异步编程进阶
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Async/Await & API 集成
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              掌握现代JavaScript异步编程，学习Promise、Fetch API与实时数据处理
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-red-200 overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">案例说明</h2>
                    <p className="text-gray-700 leading-relaxed">异步编程实战演示</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">演示async/await、Promise与异步函数的现代用法</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">使用Fetch API获取GitHub仓库的实时数据</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">学习错误处理与状态管理的最佳实践</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    技术要点
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-red-50 p-3 rounded-lg border border-red-200 text-center">
                      <div className="text-red-700 font-mono">async/await</div>
                    </div>
                    <div className="bg-rose-50 p-3 rounded-lg border border-rose-200 text-center">
                      <div className="text-rose-700 font-mono">Promise</div>
                    </div>
                    <div className="bg-pink-50 p-3 rounded-lg border border-pink-200 text-center">
                      <div className="text-pink-700 font-mono">Fetch API</div>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg border border-red-200 text-center">
                      <div className="text-red-700 font-mono">Error Handling</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-rose-200 overflow-hidden">
              <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-14 -translate-x-14"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1V7H7v2a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">实时API数据</h2>
                    <p className="text-red-100">GitHub仓库监控</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
                    <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      仓库信息
                    </h3>
                    <div className="bg-white p-6 rounded-lg border border-red-200 shadow-sm">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-red-700">yangjh-xbmu/Web-develop</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-red-700">状态:</span>
                          <span className={`${isLoading ? 'text-yellow-600' : error ? 'text-red-600' : 'text-green-600'}`}>
                            {isLoading ? '获取中...' : error ? '获取失败' : '获取成功'}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-red-700">最后推送:</span>
                          <div className="text-right">
                            {isLoading ? (
                              <div className="flex items-center space-x-2">
                                <div className="animate-spin w-4 h-4 border-2 border-rose-500 border-t-transparent rounded-full"></div>
                                <span className="text-yellow-600">加载中...</span>
                              </div>
                            ) : lastPushDate ? (
                              <div className="space-y-1">
                                <div className="text-green-600">{new Date(lastPushDate).toLocaleString('zh-CN')}</div>
                                <div className="text-gray-500 text-xs">{new Date(lastPushDate).toLocaleTimeString('zh-CN')}</div>
                              </div>
                            ) : (
                              <span className="text-gray-500">暂无数据</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
                    <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      控制台日志
                    </h3>
                    <div 
                      id="demo"
                      ref={demoRef}
                      className="bg-black/40 rounded-xl p-4 font-mono text-sm border border-rose-500/20 text-center"
                    >
                      <div className="text-rose-400 mb-2">💻 实时执行状态</div>
                      {lastPushDate ? (
                        <div className="space-y-1">
                          <div className="text-green-400">✅ API 调用成功</div>
                          <div className="text-rose-300 text-xs">
                            数据时间: {lastPushDate}
                          </div>
                        </div>
                      ) : isLoading ? (
                        <div className="text-yellow-400">⏳ 正在获取数据...</div>
                      ) : (
                        <div className="text-red-400">❌ 获取失败</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    调试提示
                  </h3>
                  <p className="text-red-200 text-sm leading-relaxed">
                    按F12打开浏览器控制台，观察Promise执行、异步函数调用与错误处理的完整日志输出。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-200 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-600 via-red-600 to-rose-600 px-8 py-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-18 translate-x-18"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">异步编程核心</h2>
                  <p className="text-pink-100">现代JavaScript必备技能</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-2xl border border-red-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">Async/Await</h3>
                  <p className="text-red-700 text-sm">现代异步语法</p>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl border border-rose-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-rose-800 mb-2">Promise链</h3>
                  <p className="text-rose-700 text-sm">链式异步操作</p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl border border-pink-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-pink-800 mb-2">Fetch API</h3>
                  <p className="text-pink-700 text-sm">网络请求接口</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-2xl border border-red-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">错误处理</h3>
                  <p className="text-red-700 text-sm">异常捕获机制</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 