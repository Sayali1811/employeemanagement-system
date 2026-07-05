import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function RegisterUser() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mt-5 text-center">

      <h2 className="main-title">
  👩‍💼 Employee <span>Management</span> System  👩‍💼  
</h2>

      {isLogin ? <Login /> : <Register />}

      <div className="mt-3">
        {isLogin ? (
          <button
            className="btn btn-link"
            onClick={() => setIsLogin(false)}
          >
            New User? Register
          </button>
        ) : (
          <button
            className="btn btn-link"
            onClick={() => setIsLogin(true)}
          >
            Already Registered? Login
          </button>
        )}
      </div>

    </div>
  );
}