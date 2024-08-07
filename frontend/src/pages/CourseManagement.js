import React from 'react';
import { Link } from 'react-router-dom';
import "../css/course-management.css";

const CourseManagement = () => {
  const courses = [
    { id: 1, title: 'React Basics', instructor: 'John Doe', duration: '3 hours', category: 'Web Development', enrollments: 150 },
    { id: 2, title: 'Spring Boot Introduction', instructor: 'Jane Smith', duration: '5 hours', category: 'Backend Development', enrollments: 200 },
    // Add more courses as needed
  ];

  return (
    <div className="course-management-dashboard">
      <div className="dashboard-header">
        <h2>Course Management Dashboard</h2>
        <Link to="/admin/courses/add" className="add-course-button">Add New Course</Link>
      </div>
      <table className="course-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Instructor</th>
            <th>Duration</th>
            <th>Category</th>
            <th>Enrollments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.instructor}</td>
              <td>{course.duration}</td>
              <td>{course.category}</td>
              <td>{course.enrollments}</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseManagement;
