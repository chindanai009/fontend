"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userOrEmail, setUserOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo: simple validation
    if (!userOrEmail || !password) {
      setError("กรุณากรอกอีเมล/ชื่อผู้ใช้ และรหัสผ่าน");
      return;
    }
    setError("");
    // TODO: Add real authentication logic here
    alert("เข้าสู่ระบบสำเร็จ (Demo)");
  };

  return (
    <div className="register-bg min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow-lg border-0 p-4 animate-fadeInUp" style={{ maxWidth: 400, width: '100%', borderRadius: 24 }}>
        <div className="text-center mb-4">
          <div className="register-icon mb-2 mx-auto d-flex align-items-center justify-content-center">
            <i className="bi bi-box-arrow-in-right fs-1 text-danger"></i>
          </div>
          <h2 className="fw-bold mb-1">เข้าสู่ระบบ</h2>
          <p className="text-muted mb-0">สำหรับสมาชิกที่มีบัญชีแล้ว</p>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">
            <label htmlFor="userOrEmail" className="form-label">อีเมลหรือชื่อผู้ใช้</label>
            <div className="input-group">
              <span className="input-group-text bg-light"><i className="bi bi-envelope-at"></i></span>
              <input
                type="text"
                className="form-control"
                id="userOrEmail"
                value={userOrEmail}
                onChange={e => setUserOrEmail(e.target.value)}
                required
                placeholder="อีเมลหรือชื่อผู้ใช้"
                autoFocus
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">รหัสผ่าน</label>
            <div className="input-group">
              <span className="input-group-text bg-light"><i className="bi bi-lock"></i></span>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </div>
          </div>
          {error && <div className="alert alert-danger py-2">{error}</div>}
          <button type="submit" className="btn btn-danger w-100 py-2 mt-2 rounded-pill fw-bold shadow-sm animate-bounceIn">
            <i className="bi bi-box-arrow-in-right me-2"></i> เข้าสู่ระบบ
          </button>
        </form>
        <div className="text-center mt-3">
          <span className="text-muted">ยังไม่มีบัญชี? </span>
          <Link href="/register" className="text-primary fw-bold"><i className="bi bi-person-plus"></i> สมัครสมาชิก</Link>
        </div>
        <div className="text-center mt-4">
          <AdminSignInButton />
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
          box-shadow: 0 2px 8px rgba(220,53,69,0.08);
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

// ปุ่ม/ไอคอนสำหรับเปิดหน้า Signin (เปลี่ยนเป็นเข้าสู่ระบบ admin)
function AdminSignInButton() {
  const router = useRouter();
  return (
    <button
      className="btn btn-outline-danger d-flex align-items-center mx-auto"
      style={{ gap: 8 }}
      onClick={() => router.push("/signin")}
      type="button"
    >
      <i className="bi bi-shield-lock" style={{ fontSize: 20 }}></i>
      <span>เข้าสู่ระบบ Admin</span>
    </button>
  );
}
