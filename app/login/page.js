"use client";

import { useState } from "react";
import Link from "next/link";

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
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h2 className="mb-4 text-center fw-bold">เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userOrEmail" className="form-label">อีเมลหรือชื่อผู้ใช้</label>
            <input
              type="text"
              className="form-control"
              id="userOrEmail"
              value={userOrEmail}
              onChange={e => setUserOrEmail(e.target.value)}
              required
              placeholder="อีเมลหรือชื่อผู้ใช้"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">รหัสผ่าน</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger py-2">{error}</div>}
          <button type="submit" className="btn btn-primary w-100 mt-2">เข้าสู่ระบบ</button>
        </form>
        <div className="text-center mt-3">
          <span>ยังไม่มีบัญชี? </span>
          <Link href="/register" className="text-primary">สมัครสมาชิก</Link>
        </div>
      </div>
    </div>
  );
}
