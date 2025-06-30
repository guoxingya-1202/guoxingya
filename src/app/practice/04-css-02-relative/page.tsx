import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 text-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYmEzMDciIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjQgMjRjMC0xMy4yNCAxMC43Ni0yNCAyNC0yNHMyNCAxMC43NiAyNCAyNC0xMC43NiAyNC0yNCAyNC0yNC0xMC43Ni0yNC0yNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-orange-600 hover:text-orange-700 transition-all bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-orange-200 hover:shadow-xl hover:border-orange-300">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold">返回首页</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-orange-200 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              CSS 定位技术
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6">
              相对定位 (Position Relative)
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              理解CSS相对定位原理，掌握元素位置调整与文档流保留机制
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">

            {/* Section: Normal Flow */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">正常文档流</h2>
                    <p className="text-orange-100">默认布局模式</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-xl border border-orange-200 text-center font-semibold text-orange-800 shadow-md">
                    元素 1
                  </div>
                  <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-xl border border-amber-200 text-center font-semibold text-amber-800 shadow-md">
                    元素 2
                  </div>
                  <div className="bg-gradient-to-r from-orange-300 to-amber-300 p-6 rounded-xl border-2 border-orange-500 text-center font-bold text-orange-900 shadow-lg">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>元素 3 (待定位)</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border border-yellow-200 text-center font-semibold text-yellow-800 shadow-md">
                    元素 4
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-bold text-orange-800">正常流特点</h3>
                  </div>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      元素按文档顺序依次排列
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      块级元素垂直堆叠
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      每个元素占据固定空间
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Relative Positioning */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-amber-200 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-14 -translate-x-14"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.627 2.707-3.227V6.741c0-1.6-1.123-2.994-2.707-3.227A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.514C3.373 3.747 2.25 5.141 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">相对定位效果</h2>
                    <p className="text-amber-100">position: relative 演示</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4 relative">
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-xl border border-orange-200 text-center font-semibold text-orange-800 shadow-md">
                    元素 1
                  </div>
                  <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-xl border border-amber-200 text-center font-semibold text-amber-800 shadow-md">
                    元素 2
                  </div>
                  
                  {/* Ghost element showing original position */}
                  <div className="bg-gradient-to-r from-orange-200/30 to-amber-200/30 p-6 rounded-xl border-2 border-dashed border-orange-400/50 text-center font-semibold text-orange-600">
                    <div className="flex items-center justify-center space-x-2 opacity-60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>元素 3 的原始位置</span>
                    </div>
                  </div>

                  {/* The relatively positioned element */}
                  <div 
                    className="absolute bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6 rounded-xl border-2 border-orange-600 font-bold text-center shadow-2xl transform hover:scale-105 transition-all duration-300"
                    style={{ 
                      top: 'calc(15rem + 3rem)', 
                      left: '3rem',
                      right: '1rem',
                      zIndex: 10
                    }}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>元素 3 (已移动)</span>
                    </div>
                    <div className="text-xs mt-2 opacity-90">position: relative; top: 50px; left: 48px;</div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border border-yellow-200 text-center font-semibold text-yellow-800 shadow-md">
                    元素 4
                  </div>
                </div>

                <div className="mt-20 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                  <div className="flex items-center mb-3">
                    <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-bold text-amber-800">关键观察</h3>
                  </div>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <span className="font-semibold">注意：</span>即使元素3被移动到新位置，元素4的位置并未改变，因为元素3在文档流中占据的空间被保留了。这就是相对定位的核心特性。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-amber-600 px-8 py-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-18 translate-x-18"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m18 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">核心代码与原理</h2>
                  <p className="text-yellow-100">理解relative定位的技术实现</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m18 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    CSS 代码示例
                  </h3>
                  <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                    <div className="text-green-400">.target-element {`{`}</div>
                    <div className="text-yellow-300 ml-4">position: relative;</div>
                    <div className="text-blue-300 ml-4">top: 50px;</div>
                    <div className="text-pink-300 ml-4">left: 48px;</div>
                    <div className="text-green-400">{`}`}</div>
                  </div>
                  
                  <div className="mt-4 space-y-2 text-sm text-orange-700">
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-yellow-400 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                      <span><strong>top: 50px</strong> - 相对原位置向下移动50px</span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-blue-400 rounded-full mt-1 mr-3 flex-shrink-0"></span>
                      <span><strong>left: 48px</strong> - 相对原位置向右移动48px</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    核心原理
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
                      <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        空间保留
                      </h4>
                      <p className="text-amber-700 text-sm">元素在文档流中的原始空间仍然被保留，其他元素不会填补这个空间。</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
                      <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                        相对偏移
                      </h4>
                      <p className="text-amber-700 text-sm">元素相对于自己的原始位置进行偏移，而不是相对于其他元素。</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
                      <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                        层叠上下文
                      </h4>
                      <p className="text-amber-700 text-sm">设置相对定位后，元素可以通过z-index控制层叠顺序。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-300">
                <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  实际应用场景
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-yellow-200 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a.997.997 0 01-1.414 0l-7-7A1.997 1.997 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-orange-800 text-sm">微调位置</h4>
                    <p className="text-orange-700 text-xs mt-1">精确调整元素位置</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-amber-800 text-sm">定位上下文</h4>
                    <p className="text-amber-700 text-xs mt-1">为子元素提供定位参考</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-yellow-200 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-yellow-800 text-sm">层叠控制</h4>
                    <p className="text-yellow-700 text-xs mt-1">配合z-index使用</p>
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