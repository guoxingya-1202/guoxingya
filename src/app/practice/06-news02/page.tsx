'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 类和对象
    class Car {
      brand: string;
      model: string;
      year: number;
      constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
      }
      start() {
        console.log(`汽车 ${this.brand} ${this.model} 启动了`);
      }
      stop() {
        console.log(`汽车 ${this.brand} ${this.model} 停止了`);
      }
    }
    const myCar = new Car('Mi', 'Yu7', 2025);
    myCar.start();
    myCar.stop();

    class ElectricCar extends Car {
      range: number;
      constructor(brand: string, model: string, year: number, range: number) {
        super(brand, model, year);
        this.range = range;
      }
      charge() {
        console.log(`电动汽车 ${this.brand} ${this.model} 正在充电`);
      }
    }
    const myElectricCar = new ElectricCar('Tesla', 'Model Y', 2025, 300);
    myElectricCar.start();
    myElectricCar.charge();

    // 回调函数练习
    console.log('111111');
    setTimeout(function () {
      console.log('22222');
    }, 2000);
    console.log('333333');

    // DOM 操作
    if (divRef.current) {
      console.log(divRef.current);
      divRef.current.innerHTML = '这是从脚本动态更改的内容（点击我试试）';
      divRef.current.onclick = function () {
        alert('我也被点击了！');
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 text-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNiI+PHBhdGggZD0iTTMwIDMwbDE1LTE1aDEwdjIwTDQwIDUwaDIwdjEwSDQwbC0xNSAxNXYtMjBsLTE1LTE1di0xMGgxNXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-green-600 hover:text-green-700 transition-all bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-green-200 hover:shadow-xl hover:border-green-300">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold">返回首页</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-green-200 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              JavaScript 进阶
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
              面向对象与DOM操作
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              深入学习TypeScript类、继承、回调函数与DOM交互的高级编程概念
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-8 py-6 text-white relative overflow-hidden">
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
                    <p className="text-green-100">JavaScript 面向对象编程</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">演示TypeScript类与继承的面向对象编程概念</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">学习回调函数与异步编程的基本概念</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">掌握DOM操作与事件处理的交互技术</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="text-center">
                    <Image
                      src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Electric car technology"
                      width={400}
                      height={200}
                      className="rounded-xl mx-auto shadow-lg"
                    />
                    <p className="mt-4 text-green-700 font-medium">智能电动汽车技术</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-14 -translate-x-14"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">交互演示</h2>
                    <p className="text-emerald-100">点击测试与控制台输出</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                    <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      交互式标题
                    </h3>
                    <h1
                      ref={h1Ref}
                      style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                      onClick={() => alert('标题被点击了！这是通过事件处理器实现的交互。')}
                      className="text-2xl font-bold text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-emerald-300 hover:border-emerald-500 text-emerald-700"
                    >
                      🖱️ 点击我体验DOM事件
                    </h1>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 border border-teal-200">
                    <h3 className="text-lg font-bold text-teal-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m18 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      动态内容区域
                    </h3>
                    <div
                      ref={divRef}
                      className="text-lg bg-white rounded-xl p-6 text-center cursor-pointer hover:bg-teal-50 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-teal-300 hover:border-teal-500 text-teal-700 font-medium"
                    >
                      等待JavaScript动态更新...
                    </div>
                    <p className="text-teal-600 text-sm mt-3 text-center">
                      📝 内容将通过DOM操作动态更新
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border border-green-300">
                  <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    温馨提示
                  </h3>
                  <p className="text-green-700 text-sm leading-relaxed">
                    按F12打开浏览器控制台，观察类实例化、方法调用、异步回调等JavaScript执行过程的详细日志输出。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-teal-200 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-600 via-green-600 to-emerald-600 px-8 py-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-18 translate-x-18"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">核心技术栈</h2>
                  <p className="text-teal-100">现代JavaScript开发必备技能</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">类与对象</h3>
                  <p className="text-green-700 text-sm">面向对象编程基础</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">继承机制</h3>
                  <p className="text-emerald-700 text-sm">extends与super关键字</p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-2xl border border-teal-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-teal-800 mb-2">回调函数</h3>
                  <p className="text-teal-700 text-sm">异步编程入门</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl border border-green-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">DOM操作</h3>
                  <p className="text-green-700 text-sm">动态网页交互</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 