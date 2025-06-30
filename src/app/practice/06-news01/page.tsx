'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const logMessages: string[] = [];
    
    const addLog = (message: string) => {
      logMessages.push(message);
      setLogs([...logMessages]);
    };

    // 类和对象
    class Student {
      name: string;
      age: number;
      school: string;
      grade: number;
      constructor(name: string, age: number, school: string, grade: number) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.grade = grade;
        addLog(`🎓 创建学生对象: ${name}, ${age}岁, ${school}, ${grade}年级`);
      }
      learn(subject = '语文') {
        const message = `${this.name}正在学习${subject}，真棒！`;
        console.log(message);
        addLog(`📚 ${message}`);
      }
      exam() {
        const message = `${this.name} 正在考试`;
        console.log(message);
        addLog(`📝 ${message}`);
      }
    }
    
    const xiaoming = new Student('小明', 7, '实验小学', 1);
    xiaoming.learn('英语');
    xiaoming.exam();

    class Undergraduate extends Student {
      major: string;
      experience: number;
      constructor(name: string, age: number, school: string, grade: number, major: string, experience: number) {
        super(name, age, school, grade);
        this.major = major;
        this.experience = experience;
        addLog(`🎯 创建大学生对象: ${name}, 专业: ${major}`);
      }
      intern(corp: string) {
        const message = `${this.name}在${corp}实习，获得经验值1000`;
        console.log(message);
        addLog(`💼 ${message}`);
        console.log(super.exam());
      }
    }
    
    const xiaoming2 = new Undergraduate('小明', 17, '科技大学', 1, '新闻学', 0);
    xiaoming2.intern('腾讯');

    // 回调函数，函数作为参数传递给另一个函数
    console.log('111111');
    addLog('⏰ 同步代码执行：111111');
    
    setTimeout(function () { 
      console.log('222222'); 
      addLog('⏰ 异步回调执行：222222');
    }, 1000);
    
    console.log('333333');
    addLog('⏰ 同步代码执行：333333');

    // DOM 操作
    setTimeout(() => {
      if (h1Ref.current) {
        console.log(h1Ref.current);
        h1Ref.current.innerHTML = '✨ 动态更新的标题（点击体验交互）';
        h1Ref.current.style.color = '#3b82f6';
        addLog('🔧 DOM操作：动态更新标题内容');
      }
      if (pRef.current) {
        pRef.current.onclick = function () {
          addLog('🖱️ 用户交互：点击了段落元素');
        };
      }
      setIsInteractive(true);
      addLog('🚀 页面初始化完成，交互功能已激活');
    }, 500);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 text-gray-800">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.05)_75%)] bg-[length:20px_20px]"></div>
      
      <main className="flex-grow container mx-auto px-6 py-8 relative z-10">
        <div className="mb-8">
          <Link href="/" className="group inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-all bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl hover:border-blue-300">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:rotate-6 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="font-semibold">返回首页</span>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-blue-200 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              面向对象编程
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              TypeScript 类与继承
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              深入学习面向对象编程核心概念：类定义、对象实例化、继承机制和DOM交互
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-8 py-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    实时执行日志
                  </h2>
                  <p className="text-blue-100 mb-4">观察面向对象代码的执行过程</p>
                </div>
              </div>

              <div className="p-6">
                <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm max-h-80 overflow-y-auto">
                  {logs.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                      正在执行代码...
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {logs.map((log, index) => (
                        <div key={index} className="text-green-400 opacity-0 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                          {log}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-200 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 px-8 py-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    交互演示区
                  </h2>
                  <p className="text-indigo-100 mb-4">体验DOM操作和事件处理</p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                  <h1
                    ref={h1Ref}
                    style={{ cursor: 'pointer', transition: 'all 0.3s' }}
                    onClick={() => {
                      setLogs(prev => [...prev, '🎯 用户点击了标题元素']);
                    }}
                    className="text-2xl font-bold text-center hover:scale-105 transform transition-all duration-300 text-blue-700 hover:text-blue-800"
                  >
                    {isInteractive ? '等待DOM更新...' : '原始标题内容'}
                  </h1>
                </div>

                <div className="text-center">
                  <Image
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="科技校园"
                    width={300}
                    height={200}
                    className="rounded-xl mx-auto shadow-lg"
                  />
                </div>

                <div className="bg-white rounded-2xl p-4 border border-blue-200 shadow-sm">
                  <p 
                    ref={pRef} 
                    className="text-center cursor-pointer hover:bg-blue-50 p-4 rounded-lg transition-all duration-300 text-blue-700 font-medium"
                    onClick={() => {
                      setLogs(prev => [...prev, '👆 用户点击了段落元素']);
                    }}
                  >
                    这是一个可交互的段落（点击试试）
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-100 p-3 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-1">类继承</h4>
                    <p className="text-blue-700">Undergraduate extends Student</p>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-800 mb-1">方法重写</h4>
                    <p className="text-indigo-700">super.exam() 调用</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">核心概念解析</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">类与对象</h4>
                <p className="text-blue-700 text-sm">定义类模板，创建对象实例</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-indigo-800 mb-2">继承机制</h4>
                <p className="text-indigo-700 text-sm">extends关键字实现类继承</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-cyan-800 mb-2">DOM交互</h4>
                <p className="text-cyan-700 text-sm">操作页面元素，绑定事件</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
} 