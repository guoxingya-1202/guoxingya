'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const output: string[] = [];
    
    // 模拟控制台输出
    const simulateConsole = (message: string) => {
      output.push(message);
      setConsoleOutput([...output]);
    };

    // 原有的JavaScript演示代码
    const a = 100;
    simulateConsole(`变量 a = ${a}`);
    console.log(a);
    const api_key = 'ssssx-=-dddd';
    simulateConsole(`API Key: ${api_key}`);
    console.log(api_key);
    simulateConsole(`类型检测: typeof ${a} = ${typeof a}, typeof "${api_key}" = ${typeof api_key}, typeof true = ${typeof true}`);
    console.log(typeof a, typeof api_key, typeof true);
    
    const b = '1';
    simulateConsole(`字符串拼接: ${a} + "${b}" = ${a + b}`);
    console.log(a + b);
    simulateConsole(`数值运算: ${a} + Number("${b}") = ${a + Number(b)}`);
    console.log(a + Number(b));
    
    const c = '100';
    simulateConsole(`相等比较: ${a} == "${c}" = ${a == c}`);
    simulateConsole(`严格比较: ${a} === "${c}" = ${a === c}`);
    console.log(typeof a, typeof c);
    console.log(a == c);
    console.log(a === c);
    
    // 分支语句
    const current_time = '12:20';
    if (current_time == '12:20') {
      simulateConsole('条件判断: 时间是12:20 → 冲啊！');
      console.log('冲啊！');
    } else {
      simulateConsole('条件判断: 时间不是12:20 → 假装学习……');
      console.log('假装学习……');
    }
    
    // for循环
    simulateConsole('For循环输出:');
    for (let i = 1; i <= 10; i++) {
      console.log(i);
      if (i <= 3) simulateConsole(`  第 ${i} 次循环`);
    }
    
    // while循环
    let hug = 60;
    while (hug > 0) {
      console.log('继续干饭……');
      hug = hug - 10;
    }
    
    // 函数
    function intro() {
      console.log('你好，我是一个脚本！');
      simulateConsole('调用 intro() → 你好，我是一个脚本！');
    }
    intro();
    
    function intro2(content: string) {
      const result = '以下是我介绍的内容： ' + String(content);
      console.log(result);
      simulateConsole(`调用 intro2("参数") → ${result}`);
    }
    console.log(typeof intro2('这是传入的参数'));
    
    function intro3(content1: string, content2: string) {
      console.log('以下是我介绍的内容： ' + String(content1) + String(content2));
    }
    intro3('参数1', '参数2');
    
    function intro4(content: string) {
      console.log(content);
      const returnValue = content + '这是返回值';
      simulateConsole(`调用 intro4("测试") → 返回值: ${returnValue}`);
      return returnValue;
    }
    intro4('带返回值的函数');
    const result = intro4('带返回值的函数');
    console.log(result);
    
    setTimeout(() => {
      simulateConsole('🎉 所有演示完成！JavaScript基础语法学习结束');
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 text-gray-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNlZTU5ZTUiIGZpbGwtb3BhY2l0eT0iMC4wNyI+PHBhdGggZD0iTTI0IDJMMzYgMTRIMjRWMnpNMTIgMTRIMjRWMjZIMTJWMTR6TTI0IDI2SDM2VjM4SDI0VjI2ek0xMiAzOEgyNFY1MEgxMlYzOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-pink-600 hover:text-pink-700 transition-all bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-pink-200 hover:shadow-xl hover:border-pink-300">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold">返回首页</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-pink-200 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m18 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              JavaScript 基础
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent mb-6">
              JavaScript 核心语法
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              通过实时代码演示掌握变量、类型、分支、循环与函数的核心概念
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-200 overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 px-8 py-6 text-white relative overflow-hidden">
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
                    <p className="text-pink-100">JavaScript 基础语法演示</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">本案例演示了JavaScript变量、类型判断、分支、循环、函数等基础语法</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">页面加载后会在控制台输出相关信息，同时右侧提供实时日志</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      可按F12打开浏览器控制台观察完整输出
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
                  <div className="text-center">
                    <Image
                      src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="JavaScript coding environment"
                      width={400}
                      height={200}
                      className="rounded-xl mx-auto shadow-lg"
                    />
                    <p className="mt-4 text-pink-700 font-medium">现代JavaScript开发环境</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-rose-200 overflow-hidden">
              <div className="bg-gradient-to-r from-rose-600 via-purple-600 to-pink-600 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-14 -translate-x-14"></div>
                
                <div className="relative z-10 flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">实时控制台</h2>
                    <p className="text-rose-100">代码执行日志</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-green-400 font-mono text-sm max-h-80 overflow-y-auto border border-gray-700">
                  {consoleOutput.length === 0 ? (
                    <div className="flex items-center justify-center h-32 text-gray-500">
                      <div className="text-center">
                        <div className="animate-spin w-8 h-8 border-2 border-rose-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                        <p>正在执行代码...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {consoleOutput.map((line, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <span className="text-rose-400 flex-shrink-0">{(index + 1).toString().padStart(2, '0')}:</span>
                          <span className="text-green-300 leading-relaxed">{line}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-xl border border-pink-200 text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-pink-800 text-sm">实时执行</h4>
                    <p className="text-pink-700 text-xs">代码实时运行</p>
                  </div>
                  <div className="bg-gradient-to-r from-rose-100 to-purple-100 p-4 rounded-xl border border-rose-200 text-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-rose-800 text-sm">日志输出</h4>
                    <p className="text-rose-700 text-xs">便于调试学习</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-purple-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 px-8 py-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -translate-y-18 translate-x-18"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">核心概念覆盖</h2>
                  <p className="text-purple-100">全面掌握JavaScript基础</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-2xl border border-pink-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a.997.997 0 01-1.414 0l-7-7A1.997 1.997 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-pink-800 mb-2">变量 & 类型</h3>
                  <p className="text-pink-700 text-sm">变量声明、数据类型、类型检测与转换</p>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-purple-50 p-6 rounded-2xl border border-rose-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-rose-800 mb-2">分支 & 循环</h3>
                  <p className="text-rose-700 text-sm">条件判断、for循环、while循环控制流程</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m18 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-purple-800 mb-2">函数编程</h3>
                  <p className="text-purple-700 text-sm">函数定义、参数传递、返回值处理</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 