import Image from 'next/image';
import { Book } from 'lucide-react';
export const CourseList = ({ courses }) => {
  return (
    <div className="mt-5 grid grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3 
    lg:grid-cols-4
    gap-5">
      {Array.isArray(courses) ? (
        courses.map((course, index) => (
          <div key={index}
          className='border rounded-lg p-2 cursor-pointer hover:border-red-900'>
            <Image
              src={course.banner.url}
              alt={course.name}
              width={300}
              height={150}
              className='rounded-lg'
            />
            <div className='mt-2'>
            <h2 className='text-[20px] md:text-[16px]
            font-medium '>{course.name}</h2>
            <div className='flex items-center gap-2 mt-2'>
              <Book className='h-6 w-6 text-red rounded-full bg-white p-1' />
              <h2 className='text-[12px] text-red-900 font-bold'>{course.totalChapter} Chapters</h2>
            </div>
            <h2 className='mt-2 text-[16px]'>{course.free?'Free':'Paid'}</h2>
          </div>
          </div>
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};
