# guoxinya-web 项目文档

## 一、项目简介  
基于Next.js 13+构建的前端学习与实践平台，整合基础HTML/CSS练习与现代框架开发，主要功能模块包括：

- **核心框架**：Next.js App Router + TypeScript
- **智能集成**：QAnything知识库快速查询组件
- **开发分析**：WakaTime编码数据可视化
- **历史作业**：整合`03-css·02.html`等20+基础练习
- **生产部署**：支持Vercel一键部署

## 二、QAnything集成方案  
### 1. 客户端组件  
```tsx:/src/app/components/QSearch.tsx
// ... existing code ...
export default function QSearch() {
  const [query, setQuery] = useState('');
  
  const search = async () => {
    const response = await fetch('/api/qanything', {
      method: 'POST',
      body: JSON.stringify({ query })
    });
    // ... 结果处理 ...
  };
  // ... 交互界面 ...
}
```

### 2. API路由配置  
```ts:/src/app/api/qanything/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { query } = await req.json();
  const response = await fetch('https://api.qanything.com/v1/search', {
    headers: {
      'Authorization': `Bearer ${process.env.QANYTHING_KEY}`
    },
    body: JSON.stringify({ query })
  });
  return NextResponse.json(await response.json());
}
```

### 3. 环境变量配置  
```env:.env.local
# QAnything API密钥
NEXT_PUBLIC_QANYTHING_KEY=q_sk_your_key_here
```

## 三、WakaTime集成实现  
### 1. 数据获取组件  
```tsx:/src/app/components/WakaTimeStats.tsx
// ... existing code ...
useEffect(() => {
  fetch('/api/wakatime')
    .then(res => res.json())
    .then(data => {
      // 处理每日编码时长数据
      setChartData(formatData(data));
    });
}, []);
```

### 2. API代理路由  
```ts:/src/app/api/wakatime/route.ts
export async function GET() {
  const res = await fetch('https://wakatime.com/api/v1/users/current/stats', {
    headers: { Authorization: `Basic ${process.env.WAKATIME_KEY}` }
  });
  return NextResponse.json(await res.json());
}
```

## 四、项目结构说明  
```
guoxinya-web/
├── public/               # 静态资源
│   └── practice/        # 旧作业资源
├── src/app/              
│   ├── layout.tsx       # 全局布局
│   ├── page.tsx         # 首页入口
│   ├── components/      # 复用组件
│   └── api/             # 后端路由
└── package.json         # 依赖配置（Next.js 15.3.1）
```

## 五、旧作业整合方案  
### 1. 静态资源迁移  
```bash
# 将历史作业的styles/images复制到public目录
cp -r c:/Users/gxy18/Desktop/1202/styles public/practice/
cp -r c:/Users/gxy18/Desktop/1202/images public/practice/
```

### 2. HTML转React组件  
```tsx:/src/app/practice/03-css-02.tsx
export default function CssExercise() {
  return (
    <div className="container">
      {/* 原始HTML内容转换 */}
      <h1 className="text-xl font-bold">CSS布局练习</h1>
      <div className="grid grid-cols-2 gap-4">...</div>
    </div>
  );
}
```

## 六、项目运行指南  
### 1. 开发环境启动  
```bash
npm install
npm run dev
```

### 2. 生产环境构建  
```bash
npm run build  # 生成优化包
npm run start  # 启动生产服务器
```

### 3. 功能截图示例  
| QAnything查询界面 | WakaTime统计图表 |
|-------------------|------------------|
| ![QAnything Demo] | ![WakaTime Demo] |
https://img.picui.cn/free/2025/06/30/6862aa72b68f9.png
https://img.picui.cn/free/2025/06/30/6862aa73c84c6.png
https://img.picui.cn/free/2025/06/30/6862aa7c36aad.png
https://img.picui.cn/free/2025/06/30/6862aa7bafce9.png
https://img.picui.cn/free/2025/06/30/6862aa842e134.png
https://img.picui.cn/free/2025/06/30/6862aa8583712.pnghttps://img.picui.cn/free/2025/06/30/6862aa7a350de.png
https://img.picui.cn/free/2025/06/30/6862aa7950930.png
https://img.picui.cn/free/2025/06/30/6862aa8c5b053.png
https://img.picui.cn/free/2025/06/30/6862aa7beb07b.png
> 注：请将截图文件保存至`public/screenshots/`目录并更新图片路径

## 七、常见问题  
- **端口冲突**：通过`npm run dev -- -p 3002`指定新端口
- **样式丢失**：检查`tailwind.config.js`内容包含：
```js
content: [
  "./src/**/*.{js,ts,jsx,tsx}"
]
```

完整文档持续更新中，建议结合项目实际结构进行调整补充。
