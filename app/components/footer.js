"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-light pt-5 pb-4">
      <div className="container">
        <div className="row g-5">
          {/* Column 1: Brand */}
          <div className="col-md-4">
            <h5 className="text-white fw-bold mb-3">MyWebsite</h5>
            <p className="small text-light opacity-75">
              รวบรวมบทความดี ๆ ข่าวสารทันสมัย และไอเดียสร้างสรรค์เพื่อคุณ.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="col-md-4">
            <h6 className="text-uppercase text-white fw-bold mb-3">เมนู</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/" className="text-light text-decoration-none link-hover">หน้าหลัก</Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="text-light text-decoration-none link-hover">เกี่ยวกับเรา</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="text-light text-decoration-none link-hover">บริการ</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-light text-decoration-none link-hover">ติดต่อ</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div className="col-md-4">
            <h6 className="text-uppercase text-white fw-bold mb-3">ติดตามเรา</h6>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-5 icon-hover">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-5 icon-hover">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light fs-5 icon-hover">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center">
          <small className="text-light opacity-75">
            © {currentYear} MyWebsite. All rights reserved.
          </small>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .link-hover:hover {
          color: #ffffff !important;
          text-decoration: none;
          font-weight: 500;
        }
        .icon-hover:hover {
          color: #ffffff !important;
          transform: scale(1.1);
          transition: 0.2s ease-in-out;
        }
      `}</style>
    </footer>
  );
}
