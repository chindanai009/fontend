'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image
            src="/images/sliders/โลโก้.png"
            alt="Logo"
            width={40}
            height={40}
            className="me-2"
          />
          <span className="fw-bold fs-4 brand-text">MyWebsite</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {[
              { href: "/", label: "หน้าหลัก", icon: "bi-house" },
              { href: "/about", label: "เกี่ยวกับเรา", icon: "bi-info-circle" },
              { href: "/service", label: "บริการ", icon: "bi-gear" },
              { href: "/contact", label: "ติดต่อ", icon: "bi-envelope" }
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link href={item.href} className="nav-link px-3 py-2 rounded-pill mx-1 nav-link-custom">
                  <i className={`bi ${item.icon} me-2`}></i>
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Login/Signup Buttons */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link href="/login" className="btn btn-outline-light px-4 py-2 rounded-pill me-2">
                <i className="bi bi-box-arrow-in-right me-2"></i>เข้าสู่ระบบ
              </Link>
              <Link href="/register" className="btn btn-primary px-4 py-2 rounded-pill">
                <i className="bi bi-person-plus me-2"></i>สมัครสมาชิก
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          transition: all 0.4s ease;
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
        }
        
        .navbar-transparent {
          background: rgba(255, 255, 255, 0.95) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.98) !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 2px 25px rgba(0, 0, 0, 0.15);
        }
        
        .brand-text {
          color: #2c3e50 !important;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .nav-link-custom {
          transition: all 0.3s ease;
          font-weight: 600;
          color: #2c3e50 !important;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .nav-link-custom:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        .nav-link-custom:active {
          transform: translateY(0);
        }
        
        .navbar-brand {
          transition: all 0.3s ease;
          color: #2c3e50 !important;
        }
        
        .navbar-brand:hover {
          transform: scale(1.05);
          color: #667eea !important;
        }
        
        .navbar-toggler {
          border: none !important;
          padding: 0.25rem 0.5rem;
        }
        
        .navbar-toggler:focus {
          box-shadow: none !important;
        }
        
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2844, 62, 80, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }
        
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: rgba(255, 255, 255, 0.98);
            border-radius: 10px;
            margin-top: 10px;
            padding: 15px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
          }
          
          .nav-link-custom {
            margin: 5px 0;
            text-align: center;
          }
        }
        
        /* เพิ่ม animation เมื่อเปิด mobile menu */
        .navbar-collapse.show {
          animation: slideDown 0.3s ease;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}