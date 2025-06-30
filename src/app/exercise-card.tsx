import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-blue-50 text-blue-600 text-xs font-medium mr-2 mb-1 px-2 py-1 rounded border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
           <div className="font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-200 flex items-center">
             查看详情
             <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
             </svg>
           </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="group">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-md hover:border-blue-200">
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
              {cardContent}
            </Link>
          ) : (
            <div className="flex flex-col h-full">{cardContent}</div>
          )}
        </div>
    </div>
  );
} 