export const CourseList = ({ courses }) => {
  return (
    <div className="mt-5">
      {Array.isArray(courses) ? (
        courses.map((course, index) => (
          <div key={index}>
            <Image src={course.banner.url} 
            alt={course.name}
            width={300}
            height={150}
            />
          </div>
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};
