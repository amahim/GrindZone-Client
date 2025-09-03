import React, { useState } from 'react';
import Navbar from '../HomePage/Navbar';
import Login from './Login';
import Register from './Register';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login'); // default tab

  return (
    <div className=' bg-[#5F7252]  min-h-screen'>
    <div className="py-4">
         <Link to="/" className="btn  text-lg text-center justify-center flex btn-outline border-2 border-white w-48 text-white font-normal mx-auto">
     <FaHome/> Back to Home
     </Link>
    </div>
      
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-lift py-4 flex justify-center mx-auto ">
        <button
          role="tab"
          className={`tab ${activeTab === 'login' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          role="tab"
          className={`tab ${activeTab === 'register' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('register')}
        >
          Register
        </button>
      </div>

      {/* Tab Content */}
      <div className=' px-4 md:px-0'>
        {activeTab === 'login' && <Login />}
        {activeTab === 'register' && <Register />}
      </div>
    </div>
  );
};

export default AuthPage;
