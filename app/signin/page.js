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
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{
      background: 'linear-gradient(135deg, #14532d 0%, #3bb78f 100%)',
      minHeight: '100vh',
      backgroundAttachment: 'fixed',
      fontFamily: 'Kanit, Prompt, sans-serif',
    }}>
      <div className="card shadow-lg border-0 p-4" style={{ maxWidth: 400, width: '100%', borderRadius: 24, background: 'rgba(255,255,255,0.95)', boxShadow: '0 8px 32px rgba(44,62,80,0.15)' }}>
        <div className="text-center mb-4">
          <i className="bi bi-shield-lock" style={{ fontSize: 48, color: '#198754', filter: 'drop-shadow(0 2px 8px #19875433)' }}></i>
          <h2 className="fw-bold mt-2" style={{ letterSpacing: 1 }}>เข้าสู่ระบบ Admin</h2>
        </div>
        <form className="row g-3" onSubmit={handleLogin} autoComplete="off">
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
            <button type="submit" className="btn btn-success btn-lg shadow-sm">
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
    </div>
  );
}