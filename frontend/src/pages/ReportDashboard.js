import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import jsPDF from 'jspdf';
import 'chart.js/auto';
import 'jspdf-autotable';
import '../css/report-dashboard.css';

const ReportDashboard = () => {
  const [timeFrame, setTimeFrame] = useState('week');

  const handleTimeFrameChange = (e) => {
    setTimeFrame(e.target.value);
    // Fetch new data based on the selected time frame
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Report Dashboard', 10, 10);
    doc.text(`Time Frame: ${timeFrame}`, 10, 20);
    doc.text('Attendance Report:', 10, 30);
    doc.text('Assignment Scores Report:', 10, 60);
    doc.text('Overall Performance Report:', 10, 90);
    
    // Optionally add charts or tables here
    // e.g., doc.addImage(chartImage, 'PNG', x, y, width, height);
    
    doc.save('report-dashboard.pdf');
  };

  // Example data for charts
  const attendanceData = {
    labels: ['John Doe', 'Jane Smith', 'Alice Johnson'],
    datasets: [
      {
        label: 'Attendance',
        data: [95, 85, 100],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const assignmentScoresData = {
    labels: ['John Doe', 'Jane Smith', 'Alice Johnson'],
    datasets: [
      {
        label: 'Assignment Scores',
        data: [90, 80, 95],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  };

  const performanceData = {
    labels: ['John Doe', 'Jane Smith', 'Alice Johnson'],
    datasets: [
      {
        label: 'Overall Performance',
        data: [85, 75, 95],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="report-dashboard">
      <h1>Report Dashboard</h1>
      <div className="report-controls">
        <label htmlFor="timeFrame">Select Time Frame:</label>
        <select id="timeFrame" value={timeFrame} onChange={handleTimeFrameChange}>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
        <button onClick={generatePDF} className="download-button">Download Report as PDF</button>
      </div>
      <div className="charts-container">
        <div className="chart-card">
          <h3>Attendance Report</h3>
          <Line data={attendanceData} />
        </div>
        <div className="chart-card">
          <h3>Assignment Scores Report</h3>
          <Line data={assignmentScoresData} />
        </div>
        <div className="chart-card">
          <h3>Overall Performance Report</h3>
          <Line data={performanceData} />
        </div>
      </div>
    </div>
  );
};

export default ReportDashboard;
