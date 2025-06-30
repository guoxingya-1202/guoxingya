import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 text-gray-700 p-4 shadow-sm w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold hover:text-blue-600 transition-colors duration-200 tracking-normal text-blue-700">
          学习作业平台
        </Link>
        <div className="space-x-8 text-base">
          <Link href="/" className="hover:text-blue-600 transition-colors duration-200 font-medium">首页</Link>
          <Link href="/archive" className="hover:text-blue-600 transition-colors duration-200 font-medium">归档</Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 items-center">
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-8 pt-24 w-full">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Web前端开发课程
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            系统化学习前端技术，掌握现代开发技能
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <WakaTimeStats />
    </div>
  );
}
