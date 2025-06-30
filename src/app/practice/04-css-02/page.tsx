import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzNkZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTI1IDI1bDEwLTEwaDEwdjEwbC0xMCAxMGgxMHYxMGgtMTBsLTEwIDEwdi0xMGwtMTAtMTB2LTEwaDEweiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-all bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl hover:border-blue-300">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold">返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-blue-200 shadow-lg backdrop-blur-sm">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
            CSS 定位系统
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            深入理解 CSS 定位
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            学习 CSS 中的 static、relative、absolute、fixed 四种定位方式，掌握元素布局的核心技术
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  交互演示区
                </h2>
                <p className="text-blue-100 mb-4">观察不同定位方式的行为特点</p>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-slate-50 border-2 border-dashed border-blue-300 rounded-2xl p-10 h-96 relative overflow-hidden">
                <div className="absolute top-4 left-4 text-xs text-blue-600 bg-blue-100 px-3 py-1 rounded-lg border border-blue-200">
                  父容器 (relative)
                </div>
                
                <div className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  Static
                </div>
                
                <div className="absolute top-16 right-8 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg transform translate-x-2 translate-y-2">
                  Relative
                </div>
                
                <div className="absolute bottom-16 left-8 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  Absolute
                </div>
                
                <div className="absolute bottom-16 right-8 w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg animate-pulse">
                  Fixed
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-indigo-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 px-8 py-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-18 translate-x-18"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">知识要点</h2>
                  <p className="text-indigo-100">定位属性详解与应用场景</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    Static 静态定位
                  </h3>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    默认定位方式，元素按照正常文档流排列，不受 top、right、bottom、left 属性影响。
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-200">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">R</span>
                    </div>
                    Relative 相对定位
                  </h3>
                  <p className="text-indigo-700 text-sm leading-relaxed">
                    相对于元素原始位置进行定位，不脱离文档流，原始位置保留空间。
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">A</span>
                    </div>
                    Absolute 绝对定位
                  </h3>
                  <p className="text-purple-700 text-sm leading-relaxed">
                    脱离文档流，相对于最近的非 static 定位祖先元素定位，如果没有则相对于初始包含块。
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-2xl border border-pink-200">
                  <h3 className="text-lg font-semibold text-pink-800 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">F</span>
                    </div>
                    Fixed 固定定位
                  </h3>
                  <p className="text-pink-700 text-sm leading-relaxed">
                    脱离文档流，相对于浏览器窗口定位，滚动页面时位置固定不变。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-purple-200 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 px-8 py-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-14 -translate-x-14"></div>
            
            <div className="relative z-10 flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">滚动测试区域</h2>
                <p className="text-purple-100">观察固定定位元素在页面滚动时的行为</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="h-64 flex flex-col justify-center items-center bg-slate-50 rounded-2xl border border-purple-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                固定定位元素
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">滚动页面测试</h3>
                <p className="text-gray-600 mb-6">向下滚动页面，观察右上角的固定定位元素</p>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3">定位属性应用场景：</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• <strong>Static:</strong> 普通内容布局</li>
                    <li>• <strong>Relative:</strong> 微调元素位置，作为绝对定位的参考</li>
                    <li>• <strong>Absolute:</strong> 弹出框、工具提示、图标覆盖</li>
                    <li>• <strong>Fixed:</strong> 导航栏、回到顶部按钮、侧边栏</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 