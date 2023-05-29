import React from 'react';
import { Link } from 'react-router-dom';
import SubmitIdea from './SubmitIdea';

const Home = ({ blogPosts }) => {
  return (
    <div className="home">
      <h2>Welcome to the Blog! An AI and Human partnership</h2>
      <SubmitIdea /> {/* Add the IdeaTracker component here */}
      <h3>Check out the latest AI assisted blog posts:</h3>
      <ul className="blog-list">
        {blogPosts.map((post) => (
          <li key={post.id} className="blog-item">
            <h3>
              <Link to={`/blog/${post.id}`} className="blog-link">
                {post.title}
              </Link>
            </h3>
            <p>{post.summary}</p> {/* Display the summary */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
