// import React from 'react';
// import { useParams, Link } from 'react-router-dom';

// const BlogPost = ({ blogPosts }) => {
//   const { postId } = useParams();

//   const post = blogPosts.find((post) => post.id === parseInt(postId));

//   if (!post) {
//     return <div>Post not found.</div>;
//   }

//   return (
//     <div className="blog-post">
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <p>Author: {post.author}</p>
//       <p>Date: {post.date}</p>

//       {/* Add a link back to the home page */}
//       <Link to="/" className="back-link">
//         Go back to Home
//       </Link>
//     </div>
//   );
// };
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../styles.css';

const BlogPost = ({ blogPosts }) => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((post) => post.id === parseInt(postId));

  if (!post) {
    navigate('/blog'); // Redirect to the BlogList component if post is undefined
    return null;
  }

  return (
    <div className="blogpost">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};



export default BlogPost;
