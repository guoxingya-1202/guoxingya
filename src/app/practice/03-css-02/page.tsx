import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmJmMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjAgMjBjMC0xMS4wNDYgOC45NTQtMjAgMjAtMjBzMjAgOC45NTQgMjAgMjAtOC45NTQgMjAtMjAgMjAtMjAtOC45NTQtMjAtMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-amber-600 hover:text-amber-700 transition-all bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl hover:border-amber-300">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold">返回首页</span>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-amber-200 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9m12 0v12a4 4 0 01-4 4M9 5l10 10-4 4" />
              </svg>
              CSS 样式管理
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
              CSS样式引入方式详解
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              掌握三种CSS样式引入方法，理解样式优先级和最佳实践
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200 hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-amber-800 mb-2 text-center">外部样式表</h3>
              <p className="text-amber-700 text-sm text-center leading-relaxed">
                通过&lt;link&gt;标签引入独立的CSS文件，便于维护和复用
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-200 hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m18 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2 text-center">内部样式表</h3>
              <p className="text-yellow-700 text-sm text-center leading-relaxed">
                在&lt;style&gt;标签内定义样式，作用域限于当前页面
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-orange-200 hover:shadow-2xl transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-orange-800 mb-2 text-center">内联样式</h3>
              <p className="text-orange-700 text-sm text-center leading-relaxed">
                直接在元素的style属性中定义，优先级最高
              </p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-200 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 px-8 py-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  实例演示区
                </h2>
                <p className="text-amber-100 text-lg">观察不同样式引入方式的效果和优先级</p>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
                <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">三种方式实例对比</h3>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-amber-800 mb-2">外部样式表示例</h4>
                        <p className="text-green-600 font-medium text-base mb-2">
                          📄 本行文本的基础样式（如字体、间距）来自全局CSS文件
                        </p>
                        <code className="bg-amber-100 text-amber-800 px-3 py-1 rounded text-sm">
                          &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-yellow-800 mb-2">内部样式表示例</h4>
                        <p className="text-blue-600 font-medium text-base mb-2 underline decoration-wavy">
                          📝 本行文本的装饰效果通过页面内样式定义
                        </p>
                        <code className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm">
                          &lt;style&gt; .example {`{ text-decoration: underline; }`} &lt;/style&gt;
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-orange-800 mb-2">内联样式示例</h4>
                        <p style={{ color: '#8A2BE2', fontWeight: 'bold', fontSize: '16px' }} className="mb-2">
                          ✨ 本行文本的样式（紫色、粗体）直接通过style属性定义，具有最高优先级
                        </p>
                        <code className="bg-orange-100 text-orange-800 px-3 py-1 rounded text-sm">
                          style=&quot;color: #8A2BE2; font-weight: bold;&quot;
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border border-amber-300">
                <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  样式优先级规则
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                    <div className="text-2xl mb-2">🥉</div>
                    <h4 className="font-semibold text-amber-800">外部样式表</h4>
                    <p className="text-amber-700">优先级最低</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-yellow-200 text-center">
                    <div className="text-2xl mb-2">🥈</div>
                    <h4 className="font-semibold text-yellow-800">内部样式表</h4>
                    <p className="text-yellow-700">中等优先级</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-orange-200 text-center">
                    <div className="text-2xl mb-2">🥇</div>
                    <h4 className="font-semibold text-orange-800">内联样式</h4>
                    <p className="text-orange-700">优先级最高</p>
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