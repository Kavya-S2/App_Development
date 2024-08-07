import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/materials.css';
const fakeVideos = [
  { id: 1, title: 'Module 1: Introduction to AI', link: 'https://www.youtube.com/embed/2ePf9rue1Ao' },
  { id: 2, title: 'Module 2: Machine Learning Basics', link: 'https://www.youtube.com/embed/2ePf9rue1Ao' },
  { id: 3, title: 'Module 3: Neural Networks', link: 'https://www.youtube.com/embed/aircAruvnKk' },
  { id: 4, title: 'Module 4: Deep Learning', link: 'https://www.youtube.com/embed/aircAruvnKk' },
  { id: 5, title: 'Module 5: AI Applications', link: 'https://www.youtube.com/embed/aircAruvnKk' }
];

const fakePDFs = [
  { id: 1, title: 'AI Basics', link: 'https://www.fakepdflink.com/ai-basics.pdf' },
  { id: 2, title: 'Advanced AI Guide', link: 'https://www.fakepdflink.com/advanced-ai.pdf' }
];

const fakeQuizzes = [
  {
    id: 1,
    question: 'What is Artificial Intelligence?',
    options: ['A computer that simulates human intelligence', 'A new programming language', 'A type of database', 'None of the above'],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Which algorithm is used for supervised learning?',
    options: ['Decision Trees', 'K-means Clustering', 'Principal Component Analysis', 'None of the above'],
    correctAnswer: 0
  },
  {
    id: 3,
    question: 'What does NLP stand for in AI?',
    options: ['Natural Language Processing', 'Neural Language Processing', 'National Language Programming', 'None of the above'],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'Which of the following is a type of neural network?',
    options: ['Convolutional Neural Network', 'Recurrent Neural Network', 'Both A and B', 'None of the above'],
    correctAnswer: 2
  },
  {
    id: 5,
    question: 'What is overfitting in machine learning?',
    options: ['Model performs well on training data but poorly on unseen data', 'Model performs well on unseen data but poorly on training data', 'Model performs equally well on both training and unseen data', 'None of the above'],
    correctAnswer: 0
  },
  {
    id: 6,
    question: 'Which algorithm is commonly used for clustering?',
    options: ['K-means', 'Linear Regression', 'Decision Trees', 'Support Vector Machines'],
    correctAnswer: 0
  },
  {
    id: 7,
    question: 'What is a common evaluation metric for classification models?',
    options: ['Accuracy', 'Mean Squared Error', 'Silhouette Score', 'All of the above'],
    correctAnswer: 0
  },
  {
    id: 8,
    question: 'Which of the following is a supervised learning technique?',
    options: ['Regression', 'Clustering', 'Dimensionality Reduction', 'All of the above'],
    correctAnswer: 0
  },
  {
    id: 9,
    question: 'What is feature engineering?',
    options: ['The process of using domain knowledge to select and transform features', 'The process of optimizing model parameters', 'The process of splitting data into training and test sets', 'None of the above'],
    correctAnswer: 0
  },
  {
    id: 10,
    question: 'Which activation function is commonly used in neural networks?',
    options: ['ReLU', 'Sigmoid', 'Tanh', 'All of the above'],
    correctAnswer: 3
  }
];

export default function MaterialsPage() {
  const { courseId } = useParams();
  const [completedVideos, setCompletedVideos] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [marks, setMarks] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      fakeVideos.forEach(video => {
        new window.YT.Player(`youtube-video-${video.id}`, {
          events: {
            onStateChange: event => {
              if (event.data === window.YT.PlayerState.ENDED) {
                setCompletedVideos(prev => ({ ...prev, [video.id]: true }));
              }
            }
          }
        });
      });
    };
  }, []);

  const handleQuizChange = (questionId, selectedOption) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleSubmitQuiz = () => {
    let totalMarks = 0;
    fakeQuizzes.forEach(quiz => {
      if (quizAnswers[quiz.id] === quiz.correctAnswer) {
        totalMarks += 1;
      }
    });
    setMarks(totalMarks);
    setShowResults(true);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredVideos = fakeVideos.filter(video =>
    video.title.toLowerCase().includes(searchTerm)
  );

  const filteredPDFs = fakePDFs.filter(pdf =>
    pdf.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="mb-4">Course Materials</h1>
        
        <div className="mb-4">
          <h2 className="mb-3">Search</h2>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control mb-4"
          />
        </div>
        
        <div className="mb-4">
          <h2 className="mb-3">Videos</h2>
          {filteredVideos.length > 0 ? (
            filteredVideos.map(video => (
              <div key={video.id} className="mb-4 video-card">
                <div id={`youtube-video-${video.id}`} className="video-container">
                  <iframe
                    width="100%"
                    height="315"
                    src={video.link}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="video-title">{video.title}</p>
                {completedVideos[video.id] && <span className="video-completed">Video completed</span>}
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${(Object.keys(completedVideos).length / fakeVideos.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))
          ) : (
            <p>No videos found</p>
          )}
        </div>
        
        <div className="mb-4">
          <h2 className="mb-3">PDFs</h2>
          {filteredPDFs.length > 0 ? (
            filteredPDFs.map(pdf => (
              <div key={pdf.id} className="mb-2">
                <a href={pdf.link} target="_blank" rel="noopener noreferrer">{pdf.title}</a>
              </div>
            ))
          ) : (
            <p>No PDFs found</p>
          )}
        </div>

        <div className="mb-4">
          <h2 className="mb-3">Quizzes</h2>
          {!showResults ? (
            <div>
              {fakeQuizzes.map(quiz => (
                <div key={quiz.id} className="mb-4 quiz-card">
                  <p className="quiz-question">{quiz.question}</p>
                  {quiz.options.map((option, index) => (
                    <div key={index} className="form-check">
                      <input
                        type="radio"
                        name={`quiz-${quiz.id}`}
                        value={index}
                        onChange={() => handleQuizChange(quiz.id, index)}
                        className="form-check-input"
                      />
                      <label className="form-check-label">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ))}
              <button className="btn btn-primary" onClick={handleSubmitQuiz}>Submit Quiz</button>
            </div>
          ) : (
            <div>
              <h3>Quiz Results</h3>
              <p>You scored {marks} out of {fakeQuizzes.length}</p>
            </div>
          )}
        </div>

        <div className="mb-4">
          <h2 className="mb-3">Learning Tips</h2>
          <ul>
            <li>Break down your study sessions into smaller chunks for better retention.</li>
            <li>Review key concepts regularly to reinforce your learning.</li>
            <li>Practice with quizzes to test your understanding.</li>
            <li>Engage with discussion forums to clarify doubts and interact with peers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
