'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log(username);

    if (data.token) {
      localStorage.setItem('token', data.token);
      router.push('/admin/users');
    } else {
      router.push('/signin');
    }
  };

  return (
    <div className="register-bg min-vh-100 d-flex align-items-center justify-content-center" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
      <div className="card shadow-lg border-0 p-4 animate-fadeInUp" style={{ maxWidth: 400, width: '100%', borderRadius: 24, fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'" }}>
        <div className="text-center mb-4">
          <div className="register-icon mb-2 mx-auto d-flex align-items-center justify-content-center">
            <i className="bi bi-shield-lock fs-1 text-success"></i>
          </div>
          <h2 className="fw-bold mb-1">เข้าสู่ระบบ Admin</h2>
          <p className="text-muted mb-0">สำหรับผู้ดูแลระบบ</p>
        </div>
        <form className="row g-3" onSubmit={handleLogin} autoComplete="off" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
          <div className="col-12">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text bg-light"><i className="bi bi-person-vcard"></i></span>
              <input type="text" className="form-control" value={username} placeholder="Username" onChange={e => setUsername(e.target.value)} autoFocus required />
            </div>
          </div>
          <div className="col-12">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light"><i className="bi bi-lock"></i></span>
              <input type="password" className="form-control" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} required />
            </div>
          </div>
          <div className="col-12 d-grid gap-2 mt-2">
            <button type="submit" className="btn btn-success btn-lg shadow-sm animate-bounceIn">
              <i className="bi bi-box-arrow-in-right me-2"></i> Sign In
            </button>
          </div>
          <div className="col-12 text-center mt-2">
            <Link href="/register" className="text-success fw-semibold me-2"><i className="bi bi-person-plus"></i> Create Account</Link>
            <span className="text-muted">|</span>
            <Link href="/" className="text-secondary fw-semibold ms-2"><i className="bi bi-key"></i> Forget Password</Link>
          </div>
        </form>
      </div>
      <style jsx>{`
        .register-bg {
          background: linear-gradient(135deg, #14532d 0%, #3bb78f 100%);
        }
        .register-icon {
          width: 64px;
          height: 64px;
          background: #f1f3f9;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(25,135,84,0.08);
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        .animate-bounceIn {
          animation: bounceIn 0.7s cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceIn {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          60% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}