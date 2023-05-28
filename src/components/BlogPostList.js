import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostList = ({ blogPosts }) => {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default BlogPostList;
