import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 text-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHZpZXdCb3g9IjAgMCA1MiA1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTI2IDI2YzAtMTQuNTc2IDExLjY5OC0yNiAyNi0yNnYyNmMtMTQuNTc2IDAtMjYgMTEuNjk4LTI2IDI2Qzc3LjY5OCAzOS42OTggNjYgNTIgNTIgNTJTMjYgNDAuNTc2IDI2IDI2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-purple-600 hover:text-purple-700 transition-all bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-purple-200 hover:shadow-xl hover:border-purple-300">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold">返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-purple-200 shadow-lg backdrop-blur-sm">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            HTML 基础
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            网页结构基础
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            学习HTML标签的基本使用方法，掌握网页结构的核心概念
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-purple-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 px-8 py-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  基础标签演示
                </h2>
                <p className="text-purple-100 mb-4">常用HTML标签的实际应用</p>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    标题标签
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
                      <h1 className="text-lg font-bold text-purple-800">H1 标题</h1>
                    </div>
                    <div className="bg-violet-50 p-3 rounded-lg border border-violet-200 text-center">
                      <h2 className="text-base font-bold text-violet-800">H2 标题</h2>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200 text-center">
                      <h3 className="text-sm font-bold text-indigo-800">H3 标题</h3>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
                      <h4 className="text-xs font-bold text-purple-800">H4 标题</h4>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    段落与文本
                  </h3>
                  <div className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm">
                    <p className="text-gray-700 mb-3">这是一个普通的段落标签 &lt;p&gt;，用于展示文本内容。</p>
                    <p className="text-gray-700">
                      这里包含了<strong className="text-purple-800 font-bold">粗体文字</strong>、
                      <em className="text-violet-800 italic">斜体文字</em>和
                      <span className="text-indigo-800 underline">下划线文字</span>的演示。
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    链接与列表
                  </h3>
                  <div className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm space-y-3">
                    <div>
                      <a href="#" className="text-purple-600 hover:text-purple-800 underline font-medium">这是一个链接示例</a>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">无序列表：</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>HTML 基础知识</li>
                        <li>CSS 样式设计</li>
                        <li>JavaScript 交互</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">有序列表：</h4>
                      <ol className="list-decimal list-inside text-gray-700 space-y-1">
                        <li>创建HTML文档</li>
                        <li>添加基础标签</li>
                        <li>设置页面样式</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-indigo-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 px-8 py-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-18 translate-x-18"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">多媒体与交互</h2>
                  <p className="text-indigo-100">图片、表格和表单元素</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    图片展示
                  </h3>
                  <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                    <Image 
                      src="/api/placeholder/300/200" 
                      alt="HTML示例图片" 
                      width={300} 
                      height={200} 
                      className="rounded-lg shadow-md mx-auto"
                    />
                    <p className="text-sm text-gray-600 text-center mt-2">HTML图片标签示例</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    搜索表单
                  </h3>
                  <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm">
                    <form className="space-y-3">
                      <div>
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                          搜索内容
                        </label>
                        <input 
                          type="text" 
                          id="search" 
                          name="search" 
                          placeholder="请输入搜索关键词..." 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all font-medium"
                      >
                        搜索
                      </button>
                    </form>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    数据表格
                  </h3>
                  <div className="bg-white p-4 rounded-lg border border-indigo-200 shadow-sm overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gradient-to-r from-purple-100 to-violet-100">
                          <th className="px-4 py-3 text-left font-semibold text-purple-800">标签</th>
                          <th className="px-4 py-3 text-left font-semibold text-purple-800">用途</th>
                          <th className="px-4 py-3 text-left font-semibold text-purple-800">示例</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200">
                          <td className="px-4 py-3 font-mono text-indigo-600">&lt;h1&gt;</td>
                          <td className="px-4 py-3 text-gray-700">主标题</td>
                          <td className="px-4 py-3 text-gray-700">页面标题</td>
                        </tr>
                        <tr className="bg-gray-50 border-t border-gray-200">
                          <td className="px-4 py-3 font-mono text-indigo-600">&lt;p&gt;</td>
                          <td className="px-4 py-3 text-gray-700">段落</td>
                          <td className="px-4 py-3 text-gray-700">文本内容</td>
                        </tr>
                        <tr className="border-t border-gray-200">
                          <td className="px-4 py-3 font-mono text-indigo-600">&lt;a&gt;</td>
                          <td className="px-4 py-3 text-gray-700">链接</td>
                          <td className="px-4 py-3 text-gray-700">导航链接</td>
                        </tr>
                      </tbody>
                    </table>
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