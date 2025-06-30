'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [tableHtml, setTableHtml] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log('111');
    }, 2000);
    console.log('222');

    function getSomething() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('1111');
          resolve();
        }, 1000);
      });
    }
    getSomething().then(() => {
      console.log('2222');
    });

    async function getSomething2() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('111111');
          resolve();
        }, 1000);
      });
    }
    (async () => {
      await getSomething2();
      console.log('222222');
    })();

    async function getAllCommitDates(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const commits = await response.json();
        // 提取每个提交的日期
        const dates = commits.map((commit: { commit: { author: { date: string } } }) => commit.commit.author.date);
        return dates;
      } catch (error) {
        console.error('获取提交日期失败:', error);
        return [];
      }
    }

    function showCommitDatesTable(dates: string[]) {
      let html = '<table class="w-full text-left border-collapse border border-orange-300 text-gray-800 rounded-lg overflow-hidden">';
      html += '<thead><tr class="bg-gradient-to-r from-orange-400 to-amber-400"><th class="p-3 border border-orange-300 text-white font-semibold">序号</th><th class="p-3 border border-orange-300 text-white font-semibold">提交日期</th></tr></thead><tbody>';
      dates.forEach((date, idx) => {
        const bgClass = idx % 2 === 0 ? 'bg-orange-50' : 'bg-white';
        html += `<tr class="${bgClass} hover:bg-orange-100 transition-colors"><td class="p-3 border border-orange-200 font-medium">${idx + 1}</td><td class="p-3 border border-orange-200">${date}</td></tr>`;
      });
      html += '</tbody></table>';
      setTableHtml(html);
      setIsLoading(false);
    }

    getAllCommitDates('yangjh-xbmu', 'Web-develop')
      .then(dates => {
        console.log('所有提交日期:', JSON.stringify(dates));
        showCommitDatesTable(dates);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200/30 via-transparent to-transparent"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-orange-600 hover:text-orange-700 transition-all bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl hover:border-orange-300 hover:scale-105">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
            </div>
            <span className="font-bold">返回主页</span>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-orange-200 shadow-lg">
              <div className="w-6 h-6 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              JavaScript 异步编程专题
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
              异步编程与数据获取
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              探索现代JavaScript异步编程模式，掌握Promise、async/await和API数据获取技术
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-orange-800 mb-2">异步执行</h3>
              <p className="text-orange-700 text-sm leading-relaxed">
                setTimeout、Promise等异步操作的执行顺序和时序控制
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-800 mb-2">API调用</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                使用fetch API获取GitHub仓库提交数据并处理响应
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-200 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">动态渲染</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                将获取的数据动态生成HTML表格并插入DOM
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 px-8 py-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    实时数据演示区
                  </h2>
                  
                  {isLoading && (
                    <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span className="text-sm font-medium">数据加载中...</span>
                    </div>
                  )}
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    技术说明
                  </h3>
                  <ul className="space-y-2 text-orange-100">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>演示setTimeout、Promise、async/await的执行顺序</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>使用fetch API获取GitHub仓库提交记录</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>请打开浏览器控制台观察异步执行输出</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                  GitHub 提交记录数据
                </h3>
                
                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-orange-300 border-t-orange-600 rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-orange-600 font-medium">正在获取数据...</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-orange-100 overflow-x-auto">
                    <div dangerouslySetInnerHTML={{ __html: tableHtml }} />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200">
            <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m18 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              关键技术点
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Promise链式调用</h4>
                    <p className="text-gray-600 text-sm">使用.then()处理异步操作结果</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">async/await语法</h4>
                    <p className="text-gray-600 text-sm">更简洁的异步代码编写方式</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">错误处理</h4>
                    <p className="text-gray-600 text-sm">try/catch捕获异步操作异常</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">DOM操作</h4>
                    <p className="text-gray-600 text-sm">动态生成并插入HTML内容</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 