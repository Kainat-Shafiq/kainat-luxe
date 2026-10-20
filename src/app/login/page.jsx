"use client";
import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import '../../styles/login.css';

function LoginForm() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') || 'login';
  const [activeTab, setActiveTab] = useState(mode);
  const [registerData, setRegisterData] = useState({ password: '', confirm: '' });

  const handleLogin = (e) => { e.preventDefault(); alert('Login Successful!'); };
  const handleRegister = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirm) { alert('Password match nahi ho raha!'); return; }
    alert('Account Created Successfully!');
  };

  return (
    <div className="auth-page">
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-box">
          <h2 className="auth-title">{activeTab === 'login' ? 'Login' : 'Create Account'}</h2>

          {activeTab === 'login' ? (
            <form onSubmit={handleLogin}>
              <label>Email Address*</label>
              <input type="email" required placeholder="Enter your email" />
              <label>Password*</label>
              <input type="password" required placeholder="Enter your password" />
              <div className="auth-row">
                <label className="check-label"><input type="checkbox" /> Remember me</label>
                <Link href="#" className="forgot">Forgot Password?</Link>
              </div>
              <button type="submit" className="black-btn">Login</button>
              <div className="divider">Or continue with</div>
              <button type="button" className="social-btn"><span className="g-icon">G</span> Continue with Google</button>
              <button type="button" className="social-btn"><span className="f-icon">f</span> Continue with Facebook</button>
              <p className="bottom-text">Don't have an account? <span onClick={() => setActiveTab('register')}>Create Account</span></p>
            </form>
          ) : (
            <form onSubmit={handleRegister}>
              <label>Full Name*</label>
              <input type="text" required placeholder="Enter your name" />
              <label>Email Address*</label>
              <input type="email" required placeholder="Enter your email" />
              <label>Password*</label>
              <input type="password" required placeholder="Enter your password" onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} />
              <label>Confirm Password*</label>
              <input type="password" required placeholder="Confirm your password" onChange={(e) => setRegisterData({ ...registerData, confirm: e.target.value })} />
              <button type="submit" className="black-btn">Create Account</button>
              <p className="bottom-text">Already have an account? <span onClick={() => setActiveTab('login')}>Login</span></p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}