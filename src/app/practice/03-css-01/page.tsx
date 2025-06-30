import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 text-gray-800">
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="relative mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-purple-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">返回首页</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9m12 0v12a4 4 0 01-4 4M9 5l10 10-4 4" />
            </svg>
            CSS 基础练习
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CSS 基础选择器详解
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            深入学习三种核心CSS选择器：标签选择器、类选择器和ID选择器的实际应用
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-6">
              <h3 className="text-2xl font-semibold text-white flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                实时演示效果
              </h3>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    标签选择器演示
                  </h4>
                  <h1 className="text-2xl font-bold text-purple-700 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    CSS学习指南
                  </h1>
                  <p className="text-gray-700 leading-relaxed">
                    通过标签选择器，我们可以为所有相同的HTML标签设置统一的样式。
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-4 flex items-center">
                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    ID选择器演示
                  </h4>
                  <h2 id="CSSbase" className="text-xl font-semibold text-indigo-700 border-l-4 border-indigo-500 pl-4 mb-3">
                    CSS语法基础 (ID: CSSbase)
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    ID选择器具有最高的优先级，用于设置页面中唯一元素的样式。
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200">
                <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                  类选择器演示
                </h4>
                <p className="abstract text-base leading-relaxed bg-white p-4 rounded-lg border-l-4 border-purple-500 italic text-purple-900 shadow-sm">
                  这是一个摘要段落 (class: abstract)，通过类选择器设置了特定的样式，包括斜体、边框和特殊的背景色。
                  类选择器是CSS中最常用的选择器，具有良好的复用性。
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">伪类选择器演示</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  链接状态演示：
                  <a href="#" className="mx-2 text-purple-600 hover:text-purple-800 hover:underline transition-all font-medium">
                    正常链接状态
                  </a>
                  和
                  <a href="#" className="mx-2 text-indigo-600 hover:text-indigo-800 hover:underline transition-all font-medium">
                    访问过的链接
                  </a>
                </p>
                <div className="flex space-x-4 mt-4">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                    悬停效果按钮
                  </button>
                  <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-lg transition-all">
                    交互式按钮
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 