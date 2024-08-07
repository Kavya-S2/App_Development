// src/contexts/EnrolledCoursesContext.js
import React, { createContext, useState } from 'react';

export const EnrolledCoursesContext = createContext();

export const EnrolledCoursesProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <EnrolledCoursesContext.Provider value={{ enrolledCourses, enrollCourse }}>
      {children}
    </EnrolledCoursesContext.Provider>
  );
};
