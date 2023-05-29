import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoadingSpinner from './components/LoadingSpinner';
import blogData from './blogData'; // Assuming you have a separate file containing the blog post data
import BlogList from './components/BlogList'; // Import the BlogList component
import Navbar from './components/Navbar'; // Import the Navbar component



// Then in render


const BlogPost = lazy(() => import('./components/BlogPost'));

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar /> {/* Add the Navbar component */}

        <h1 className="title">Minimalist Idea Tracker and Tech Blog</h1>
        <h2>under construction with the help of AI..</h2>

        <Routes>
          <Route exact path="/" element={<Home blogPosts={blogData} />} />
          <Route exact path="/blog" element={<BlogList blogPosts={blogData} />} />
         

          <Route
            path="/blog/:postId"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BlogPost blogPosts={blogData} />
              </Suspense>
            }
          />

          {/* Other routes and components */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
