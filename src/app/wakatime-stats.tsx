import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "No activity yet";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "Server Error";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <div className="flex items-center justify-center space-x-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>总编码时长: <span className="font-semibold text-blue-600">{stats}</span></span>
        </div>
    );
}

export default function WakaTimeStats() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 text-center py-8 mt-auto w-full">
        <div className="container mx-auto px-6">
          <p className="mb-3 text-sm">&copy; {new Date().getFullYear()} Web前端开发课程 - 学习永无止境</p>
          <Suspense fallback={
            <div className="flex items-center justify-center space-x-2 text-sm">
              <div className="animate-pulse w-4 h-4 bg-blue-200 rounded"></div>
              <span>正在加载编码时长...</span>
            </div>
          }>
              <WakaTimeData />
          </Suspense>
        </div>
    </footer>
  );
} 