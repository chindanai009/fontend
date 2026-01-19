"use client";

import { useEffect, useState } from 'react';
import { use } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { getUserById, updateUser } from '@/lib/api';

export default function Page({params}) {
  const router = useRouter();
  const { id } = use(params); // ✅ Unwrap params with React.use()
  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        const data = await getUserById(id);
        if (data.data) {
          setFirstname(data.data.firstname || '');
          setFullname(data.data.fullname || '');
          setLastname(data.data.lastname || '');
          setUsername(data.data.username || '');
          setPassword(data.data.password || '');
          setAddress(data.data.address || '');
          setSex(data.data.sex || '');
          setBirthday(data.data.birthday || '');
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด', text: 'ไม่สามารถโหลดข้อมูลผู้ใช้' });
      }
    }
    getUser();
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await updateUser(id, { firstname, fullname, lastname, username, password, address, sex, birthday });
      if (result.status === 'ok') {
        Swal.fire({ icon: 'success', title: 'อัปเดตข้อมูลสำเร็จ!', timer: 1500, showConfirmButton: false });
        setTimeout(() => {
          router.push('/admin/users');
        }, 1500);
      } else {
        Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด', text: result.message || 'เกิดข้อผิดพลาดในการอัปเดต' });
      }
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'เกิดข้อผิดพลาด', text: err.message || 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์' });
    }
    setLoading(false);
  };

  return (
    <div className="register-bg min-vh-100 d-flex align-items-center justify-content-center" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
      <div className="card shadow-lg border-0 p-4 animate-fadeInUp" style={{ maxWidth: 480, width: "100%", borderRadius: 24, fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'" }}>
        <div className="text-center mb-4">
          <div className="register-icon mb-2 mx-auto d-flex align-items-center justify-content-center">
            <i className="bi bi-pencil-square fs-1 text-warning"></i>
          </div>
          <h2 className="fw-bold mb-1">แก้ไขข้อมูลผู้ใช้</h2>
          <p className="text-muted mb-0">ปรับปรุงข้อมูลบัญชีผู้ใช้</p>
        </div>
        <form onSubmit={handleUpdateSubmit} autoComplete="off" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
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
          <button type="submit" className="btn btn-warning w-100 py-2 mt-2 rounded-pill fw-bold shadow-sm" disabled={loading}>
            <i className="bi bi-pencil-square me-2"></i>{loading ? 'กำลังอัปเดต...' : 'อัปเดตข้อมูล'}
          </button>
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
