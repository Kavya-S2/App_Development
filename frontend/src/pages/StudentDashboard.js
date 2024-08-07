// src/pages/StudentDashboard.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EnrolledCoursesContext } from '../pages/EnrolledCoursesContext';

export default function StudentDashboard() {
  const { enrolledCourses, removeCourse } = useContext(EnrolledCoursesContext);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1>Dashboard</h1>
          <p className="lead"></p>
        </div>
        <div className="mb-4">
          <h2 className="mb-3">Your Progress</h2>
          <div className="progress" style={{ height: '30px' }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '70%' }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70% Completed
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="mb-3">Recent Announcements</h2>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
              New course materials available for your JavaScript class.
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Upcoming webinar on React best practices.
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Don't forget to submit your assignments by the end of this week.
            </a>
          </div>
        </div>
        <h2 className="mb-4">Enrolled Courses</h2>
        {enrolledCourses.length > 0 ? (
          <div className="row g-4">
            {enrolledCourses.map((course) => (
              <div className="col-lg-4 col-md-6" key={course.id}>
                <div className="course-item shadow rounded overflow-hidden">
                  <div className="p-4">
                    <h5 className="mb-0">{course.name}</h5>
                    <Link to={`/course/${course.id}/materials`} className="btn btn-primary mt-2">Go to Course</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>You have not enrolled in any courses yet.</p>
        )}
      </div>
    </div>
  );
}
