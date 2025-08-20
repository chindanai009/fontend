'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tokenState, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // token check
    const token = localStorage.getItem("token");
    setToken(token);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/signin");
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top nav-glass ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'} font-modern`} style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2 font-modern" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
          <span className="logo-icon d-flex align-items-center justify-content-center">
            <Image
              src="/images/sliders/โลโก้.png"
              alt="Logo"
              width={36}
              height={36}
              className="me-1"
            />
          </span>
          <span className="fw-bold fs-4 brand-text d-flex align-items-center gap-1 font-modern" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
            MyWebsite
            <i className="bi bi-stars brand-star ms-1"></i>
          </span>
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
          <ul className="navbar-nav ms-auto align-items-lg-center font-modern" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
            { [
              { href: "/", label: "หน้าหลัก", icon: "bi-house", color: "text-success" },
              { href: "/about", label: "เกี่ยวกับเรา", icon: "bi-info-circle", color: "text-primary" },
              { href: "/service", label: "บริการ", icon: "bi-gear", color: "text-warning" },
              { href: "/contact", label: "ติดต่อ", icon: "bi-envelope", color: "text-danger" }
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link href={item.href} className="nav-link px-3 py-2 rounded-pill mx-1 nav-link-custom font-modern" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
                  <i className={`bi ${item.icon} me-2 ${item.color}`}></i>
                  {item.label}
                </Link>
              </li>
            )) }
            {/* Login/Signup or Logout Button */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              {tokenState ? (
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="btn btn-outline-danger px-4 py-2 rounded-pill font-modern"
                  style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>SignOut
                </button>
              ) : (
                <>
                  <Link href="/login" className="btn btn-outline-light px-4 py-2 rounded-pill me-2 font-modern" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
                    <i className="bi bi-box-arrow-in-right me-2"></i>Login
                  </Link>
                  <Link href="/register" className="btn btn-primary px-4 py-2 rounded-pill font-modern" style={{fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"}}>
                    <i className="bi bi-person-plus me-2"></i>Register
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .logo-icon {
          background: linear-gradient(135deg, #43e97b 0%, #38ef7d 100%);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          box-shadow: 0 2px 8px rgba(67, 233, 123, 0.18);
          border: 2px solid #fff;
          position: relative;
        }
        .brand-star {
          color: #fff700;
          font-size: 1.1em;
          animation: twinkle 1.5s infinite alternate;
        }
        @keyframes twinkle {
          from { opacity: 0.7; transform: scale(1); }
          to { opacity: 1; transform: scale(1.2) rotate(-10deg); }
        }
        .nav-glass {
          background: linear-gradient(90deg, #14532d 0%, #43e97b 100%) !important;
          box-shadow: 0 8px 32px 0 rgba(34, 197, 94, 0.18);
          border-bottom: 2px solid rgba(67, 233, 123, 0.18);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition: all 0.4s cubic-bezier(.4,2,.3,1);
        }
        .navbar-transparent {
         background: linear-gradient(90deg, #11998e 0%, #38ef7d 100%) !important;
          box-shadow: 0 4px 32px 0 rgba(34, 197, 94, 0.18);
          border-bottom: 2px solid #43e97b;
        }
        
        .navbar-scrolled {
          background: linear-gradient(90deg, #11998e 0%, #38ef7d 100%) !important;
          box-shadow: 0 4px 32px 0 rgba(34, 197, 94, 0.18);
          border-bottom: 2px solid #43e97b;
        }
        .brand-text {
          color: #fff !important;
          text-shadow: 0 2px 8px rgba(34,197,94,0.18);
          letter-spacing: 1px;
        }
        .nav-link-custom {
          transition: all 0.3s cubic-bezier(.4,2,.3,1);
          font-weight: 600;
          color: #fff !important;
          text-shadow: 0 1px 2px rgba(34,197,94,0.12);
          position: relative;
          overflow: hidden;
        }
        .nav-link-custom:before {
          content: '';
          position: absolute;
          left: 0; top: 0; width: 100%; height: 100%;
          background: linear-gradient(90deg, #43e97b 0%, #38ef7d 100%);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 0;
        }
        .nav-link-custom:hover:before {
          opacity: 0.18;
        }
        .nav-link-custom i.bi {
          transition: color 0.2s;
        }
        .nav-link-custom:hover i.bi.text-success {
          color: #14532d !important;
        }
        .nav-link-custom:hover i.bi.text-primary {
          color: #14532d !important;
        }
        .nav-link-custom:hover i.bi.text-warning {
          color: #14532d !important;
        }
        .nav-link-custom:hover i.bi.text-danger {
          color: #14532d !important;
        }
        .nav-link-custom:hover {
          color: #14532d !important;
          background: linear-gradient(90deg, #d4fc79 0%, #96e6a1 100%) !important;
          box-shadow: 0 5px 18px rgba(67, 233, 123, 0.18);
          text-shadow: 0 2px 8px rgba(34,197,94,0.18);
          transform: translateY(-2px) scale(1.04);
        }
        .nav-link-custom:active {
          transform: translateY(0) scale(1);
        }
        .navbar-brand {
          transition: all 0.3s cubic-bezier(.4,2,.3,1);
          color: #fff !important;
        }
        .navbar-brand:hover {
          transform: scale(1.07) rotate(-2deg);
          color: #43e97b !important;
          text-shadow: 0 2px 8px #43e97b;
        }
        .navbar-toggler {
          border: none !important;
          padding: 0.25rem 0.5rem;
        }
        .navbar-toggler:focus {
          box-shadow: 0 0 0 2px #43e97b !important;
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2844, 62, 80, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background: linear-gradient(135deg, #43e97b 0%, #38ef7d 100%);
            border-radius: 12px;
            margin-top: 10px;
            padding: 15px;
            box-shadow: 0 5px 25px rgba(67, 233, 123, 0.18);
          }
          .nav-link-custom {
            margin: 5px 0;
            text-align: center;
          }
        }
        .navbar-collapse.show {
          animation: slideDown 0.3s cubic-bezier(.4,2,.3,1);
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