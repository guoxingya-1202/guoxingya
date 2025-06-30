"use client";
import Link from 'next/link';

export default function EmbedDemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-gray-800 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwOGI2ZDQiIGZpbGwtb3BhY2l0eT0iMC4wNiI+PHBhdGggZD0iTTMyIDMyYzAtMTcuNjczIDE0LjMyNy0zMiAzMi0zMnMzMiAxNC4zMjcgMzIgMzItMTQuMzI3IDMyLTMyIDMyLTMyLTE0LjMyNy0zMi0zMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-15"></div>
      
      <main className="flex-grow w-full h-full relative z-10">
        <div className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-emerald-200 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-6 py-2">
            <div className="flex items-center gap-4">
              <Link href="/" className="group inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-all">
                <div className="w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                <span className="font-medium text-sm">返回</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-emerald-700">🤖 AI智能问答平台</h1>
                  <p className="text-xs text-emerald-600">QAnything集成演示</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-2 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-700 text-xs font-medium">在线</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-4 mb-4 mt-16">
          <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-t-xl border-t border-l border-r border-emerald-200 p-2 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span className="ml-3 text-emerald-700 font-medium text-sm">QAnything AI问答服务</span>
              </div>
              <div className="text-emerald-600 text-xs">ai.youdao.com</div>
            </div>
          </div>
        </div>

        <iframe
          src="https://ai.youdao.com/saas/qanything/#/home"
          title="QAnything 智能问答服务"
          width="100%"
          height="100%"
          className="fixed left-0 w-full z-5"
          style={{
            top: 120,
            height: 'calc(100vh - 140px)',
            border: 'none',
            borderRadius: '0 0 12px 12px',
            maxWidth: 'calc(100vw - 32px)',
            left: '16px',
            right: '16px',
            boxShadow: '0 20px 40px -12px rgba(16, 185, 129, 0.15)',
          }}
          allowFullScreen
        />
      </main>
    </div>
  );
} 