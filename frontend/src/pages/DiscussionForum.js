import React, { useState } from 'react';

const DiscussionForum = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: 'John Doe', content: 'What are the prerequisites for this course?', likes: 0, dislikes: 0, answers: [] },
    { id: 2, author: 'Jane Smith', content: 'Can someone share the best resources for this topic?', likes: 0, dislikes: 0, answers: [] }
  ]);
  const [newPost, setNewPost] = useState('');
  const [nextId, setNextId] = useState(3);
  const [newAnswer, setNewAnswer] = useState({});

  const handleAddPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: nextId, author: 'Anonymous', content: newPost, likes: 0, dislikes: 0, answers: [] }]);
      setNewPost('');
      setNextId(nextId + 1);
    }
  };

  const handleLikePost = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleDislikePost = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post));
  };

  const handleAddAnswer = (postId) => {
    if (newAnswer[postId]?.trim()) {
      setPosts(posts.map(post =>
        post.id === postId
          ? { ...post, answers: [...post.answers, { author: 'Anonymous', content: newAnswer[postId], likes: 0, dislikes: 0 }] }
          : post
      ));
      setNewAnswer({ ...newAnswer, [postId]: '' });
    }
  };

  const handleLikeAnswer = (postId, answerIndex) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, answers: post.answers.map((answer, index) => index === answerIndex ? { ...answer, likes: answer.likes + 1 } : answer) }
        : post
    ));
  };

  const handleDislikeAnswer = (postId, answerIndex) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, answers: post.answers.map((answer, index) => index === answerIndex ? { ...answer, dislikes: answer.dislikes + 1 } : answer) }
        : post
    ));
  };

  return (
    <div className="container py-5">
      <h2>Bytelearn Community</h2>
      <div className="mb-4">
        <textarea
          className="form-control"
          rows="3"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>
        <button
          className="btn btn-primary mt-2"
          onClick={handleAddPost}
        >
          Add Post
        </button>
      </div>
      <div className="list-group">
        {posts.map(post => (
          <div key={post.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{post.author}</strong>
                <p>{post.content}</p>
                <button className="btn btn-sm me-2" style={{ backgroundColor: '#28a745', color: '#fff' }} onClick={() => handleLikePost(post.id)}>Like ({post.likes})</button>
                <button className="btn btn-sm" style={{ backgroundColor: '#dc3545', color: '#fff' }} onClick={() => handleDislikePost(post.id)}>Dislike ({post.dislikes})</button>
              </div>
            </div>
            <div className="mt-3">
              <textarea
                className="form-control"
                rows="2"
                value={newAnswer[post.id] || ''}
                onChange={(e) => setNewAnswer({ ...newAnswer, [post.id]: e.target.value })}
                placeholder="Write an answer..."
              ></textarea>
              <button
                className="btn btn-secondary mt-2"
                onClick={() => handleAddAnswer(post.id)}
              >
                Post Answer
              </button>
              <div className="mt-3">
                {post.answers.map((answer, index) => (
                  <div key={index} className="border rounded p-2 mt-2">
                    <strong>{answer.author}</strong>
                    <p>{answer.content}</p>
                    <button className="btn btn-sm me-2" style={{ backgroundColor: '#28a745', color: '#fff' }} onClick={() => handleLikeAnswer(post.id, index)}>Like ({answer.likes})</button>
                    <button className="btn btn-sm" style={{ backgroundColor: '#dc3545', color: '#fff' }} onClick={() => handleDislikeAnswer(post.id, index)}>Dislike ({answer.dislikes})</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
