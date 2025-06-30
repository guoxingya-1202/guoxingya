import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 text-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwOGI2ZDQiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-teal-600 hover:text-teal-700 transition-all bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-teal-200 hover:shadow-xl hover:border-teal-300">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold">返回首页</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-teal-200 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              CSS 核心技术
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
              CSS 核心概念详解
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              深入理解CSS盒模型、布局系统和动画效果，掌握现代Web开发的基础技能
            </p>
          </header>

          <div className="space-y-12">
            
            {/* Section: Box Model */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-teal-200 overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">盒模型 (Box Model)</h2>
                    <p className="text-teal-100">理解元素的完整渲染结构</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  CSS盒模型是网页布局的基础，每个元素都是一个矩形盒子，由内容、内边距、边框和外边距组成。
                </p>
                
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-12 rounded-2xl border border-teal-200">
                  <div className="flex justify-center items-center">
                    <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-8 rounded-xl shadow-lg" style={{ margin: '2rem' }}>
                      <div className="bg-gradient-to-r from-teal-200 to-cyan-200 p-6 rounded-lg" style={{ border: '3px solid #0891b2' }}>
                        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-8 rounded-lg text-center font-bold text-lg shadow-inner">
                          内容区域
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 mt-8 text-center text-sm">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-teal-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto mb-2"></div>
                      <h4 className="font-bold text-teal-800">Content</h4>
                      <p className="text-gray-600">内容</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-cyan-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-2"></div>
                      <h4 className="font-bold text-cyan-800">Padding</h4>
                      <p className="text-gray-600">内边距</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-blue-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-2"></div>
                      <h4 className="font-bold text-blue-800">Border</h4>
                      <p className="text-gray-600">边框</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-2"></div>
                      <h4 className="font-bold text-indigo-800">Margin</h4>
                      <p className="text-gray-600">外边距</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Layout */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-200 overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-14 -translate-x-14"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">布局系统 (Layout)</h2>
                    <p className="text-cyan-100">现代CSS布局方案对比</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border border-cyan-200">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">I</span>
                      </div>
                      <h3 className="text-xl font-bold text-cyan-800">Display: inline</h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      使块级元素表现为内联元素，在同一行内依次排列，常用于导航链接等场景。
                    </p>
                    <div className="bg-white p-6 rounded-xl shadow-inner border border-cyan-100">
                      <p className="inline bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg mr-2 shadow-sm">元素一</p>
                      <p className="inline bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg mr-2 shadow-sm">元素二</p>
                      <p className="inline bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-sm">元素三</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">F</span>
                      </div>
                      <h3 className="text-xl font-bold text-blue-800">Display: flex</h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      弹性布局模型，提供强大的一维布局能力，轻松实现元素的对齐和空间分布。
                    </p>
                    <div className="bg-white p-6 rounded-xl shadow-inner border border-blue-100 flex justify-around items-center">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-3 rounded-lg text-center shadow-sm">
                        <div className="text-sm font-semibold">Flex 1</div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-3 rounded-lg text-center shadow-sm">
                        <div className="text-sm font-semibold">Flex 2</div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg text-center shadow-sm">
                        <div className="text-sm font-semibold">Flex 3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Animation */}
            <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-18 translate-x-18"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">过渡动画 (Transition)</h2>
                    <p className="text-blue-100">为用户界面增添生动的交互体验</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  CSS过渡效果让属性变化更加平滑自然，通过简单的transition属性就能创造出优雅的动画效果。
                </p>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-2xl border border-blue-200">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">交互式动画演示</h3>
                    <p className="text-gray-600">将鼠标悬停在下面的元素上查看动画效果</p>
                  </div>
                  
                  <div className="flex justify-center items-center space-x-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-500 to-cyan-500 flex justify-center items-center text-white font-bold cursor-pointer transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-500 hover:rounded-full hover:scale-110 hover:rotate-45 shadow-lg hover:shadow-2xl rounded-lg">
                      <span className="text-sm text-center">悬停<br/>变换</span>
                    </div>
                    
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-500 flex justify-center items-center text-white font-bold cursor-pointer transition-all duration-700 ease-in-out hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:scale-125 hover:-rotate-12 shadow-lg hover:shadow-2xl rounded-xl">
                      <span className="text-sm text-center">缩放<br/>旋转</span>
                    </div>
                    
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 flex justify-center items-center text-white font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50 rounded-2xl hover:rounded-lg">
                      <span className="text-sm text-center">阴影<br/>效果</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-teal-200">
                      <h4 className="font-bold text-teal-800 mb-1">Transform</h4>
                      <p className="text-gray-600">形变动画</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-1">Scale & Rotate</h4>
                      <p className="text-gray-600">缩放旋转</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-purple-200">
                      <h4 className="font-bold text-purple-800 mb-1">Box Shadow</h4>
                      <p className="text-gray-600">阴影效果</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
} 