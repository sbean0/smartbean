import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoadingSpinner from './components/LoadingSpinner';
import blogData from './blogData'; // Assuming you have a separate file containing the blog post data
import BlogList from './components/BlogList'; // Import the BlogList component
import Navbar from './components/Navbar'; // Import the Navbar component


const BlogPost = lazy(() => import('./components/BlogPost'));

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar /> {/* Add the Navbar component */}

        <h1 className="title">Minimalist Idea Tracker</h1>

        <Routes>
          <Route exact path="/" element={<Home blogPosts={blogData} />} />

          <Route
            path="/blog/:postId"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BlogPost blogPosts={blogData} />
              </Suspense>
            }
          />

          {/* Other routes and components */}
          <Route path="/blog" element={<BlogList blogPosts={blogData} />} /> {/* Add this route */}

        </Routes>
      </div>
    </Router>
  );
};

export default App;
