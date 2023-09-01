import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

// Layout component to define the overall page structure
const Layout = () => {
  return (
    <div className="App">
      {/* Display a sidebar component */}
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>
        {/* Render the content based on the current route */}
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          {/* Closing body and HTML tags */}
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout;