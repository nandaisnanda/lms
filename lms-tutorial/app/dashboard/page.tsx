"use client"
import React, { useEffect, useState } from "react";
import CategoryFilter from "./_components/categoryfilter";
import getCourseList from "./../_services/index";
import { CourseList } from "./_components/courselist";

const Browser: React.FC = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then((resp) => {
      console.log(resp); // Corrected variable name
      setCourses(resp.courseLists);
    });
  };

  return (
    <div className="p-5">
      <CategoryFilter />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  );
};

export default Browser;
