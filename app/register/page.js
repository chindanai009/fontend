"use client";

import { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function RegisterPage() {
  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, fullname, lastname, username, password, address, sex, birthday }),
      });
      const result = await res.json();
      if (res.ok) {
        Swal.fire({ icon: 'success', title: 'สมัครสมาชิกสำเร็จ!', text: 'คุณสามารถเข้าสู่ระบบได้แล้ว', timer: 2000, showConfirmButton: false });
        setFirstname(''); setFullname(''); setLastname(''); setUsername(''); setPassword(''); setAddress(''); setSex(''); setBirthday('');
      } else {
        Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด', text: result.message || 'ไม่สามารถสมัครสมาชิกได้' });
      }
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด', text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์' });
    }
    setLoading(false);
  };

  return (
    <div className="register-bg min-vh-100 d-flex align-items-center justify-content-center" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
      <div className="card shadow-lg border-0 p-4 animate-fadeInUp" style={{ maxWidth: 480, width: "100%", borderRadius: 24, fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'" }}>
        <div className="text-center mb-4">
          <div className="register-icon mb-2 mx-auto d-flex align-items-center justify-content-center">
            <i className="bi bi-person-plus fs-1 text-primary"></i>
          </div>
          <h2 className="fw-bold mb-1">สมัครสมาชิก</h2>
          <p className="text-muted mb-0">สร้างบัญชีใหม่เพื่อใช้งานเว็บไซต์</p>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
          <div className="row g-2">
            <div className="col-md-4 mb-3">
              <label className="form-label">คำนำหน้า</label>
              <input type="text" className="form-control" placeholder="นาย/นาง/นางสาว" value={firstname} onChange={e => setFirstname(e.target.value)} required />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">ชื่อ</label>
              <input type="text" className="form-control" placeholder="ชื่อจริง" value={fullname} onChange={e => setFullname(e.target.value)} required />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">นามสกุล</label>
              <input type="text" className="form-control" placeholder="นามสกุล" value={lastname} onChange={e => setLastname(e.target.value)} required />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">เพศ</label>
            <select className="form-select" value={sex} onChange={e => setSex(e.target.value)} required>
              <option value="">เลือกเพศ</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="อื่นๆ">อื่นๆ</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">วันเกิด</label>
            <input type="date" className="form-control" value={birthday} onChange={e => setBirthday(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">ที่อยู่</label>
            <textarea className="form-control" rows={2} placeholder="ที่อยู่ปัจจุบัน" value={address} onChange={e => setAddress(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">ชื่อผู้ใช้ (username)</label>
            <input type="text" className="form-control" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">รหัสผ่าน</label>
            <input type="password" className="form-control" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 mt-2 rounded-pill fw-bold shadow-sm" disabled={loading}>
            <i className="bi bi-person-plus me-2"></i>{loading ? 'กำลังสมัคร...' : 'สมัครสมาชิก'}
          </button>
        </form>
        <div className="text-center mt-3">
          <span className="text-muted">มีบัญชีอยู่แล้ว? </span>
          <Link href="/login" className="text-primary fw-bold">เข้าสู่ระบบ</Link>
        </div>
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
          box-shadow: 0 2px 8px rgba(13,110,253,0.08);
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
