'use client';

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light">
      {/* Main Footer */}
      <div className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Brand Column */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand mb-4">
                <h3 className="fw-bold text-primary mb-3">
                  <i className="bi bi-code-square me-2"></i>MyWebsite
                </h3>
                <p className="text-light opacity-75 mb-4">
                  เราเป็นทีมงานมืออาชีพที่มุ่งมั่นสร้างสรรค์ผลงานคุณภาพเพื่อตอบสนองความต้องการของลูกค้าทุกท่าน
                </p>
                <div className="contact-info">
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-telephone text-primary me-3"></i>
                    <span>+66 (0) 2-123-4567</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-envelope text-primary me-3"></i>
                    <span>info@mywebsite.com</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-geo-alt text-primary me-3"></i>
                    <span>กรุงเทพฯ, ประเทศไทย</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white fw-bold mb-4">เมนูหลัก</h5>
              <ul className="list-unstyled footer-links">
                <li className="mb-3">
                  <Link href="/" className="text-light text-decoration-none d-flex align-items-center">
                    <i className="bi bi-house me-2"></i>หน้าหลัก
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/about" className="text-light text-decoration-none d-flex align-items-center">
                    <i className="bi bi-info-circle me-2"></i>เกี่ยวกับเรา
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/services" className="text-light text-decoration-none d-flex align-items-center">
                    <i className="bi bi-gear me-2"></i>บริการ
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/contact" className="text-light text-decoration-none d-flex align-items-center">
                    <i className="bi bi-envelope me-2"></i>ติดต่อ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white fw-bold mb-4">บริการ</h5>
              <ul className="list-unstyled footer-links">
                <li className="mb-3">
                  <a href="#" className="text-light text-decoration-none d-flex align-items-center">
                    <i className="bi bi-laptop me-2"></i>Web Development
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-light text-decoration-none d-flex align-items-center">
                    <i className="bi bi-phone me-2"></i>Mobile App
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-light text-decoration-none d-flex align-items-center">
                    <i className="bi bi-palette me-2"></i>UI/UX Design
                  </a>
                </li>
                <li className="mb-3">
                  <a href="#" className="text-light text-decoration-none d-flex align-items-center">
                    <i className="bi bi-graph-up me-2"></i>Digital Marketing
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white fw-bold mb-4">ติดตามข่าวสาร</h5>
              <p className="text-light opacity-75 mb-4">
                สมัครรับข่าวสารและอัปเดตล่าสุดจากเรา
              </p>
              <form className="newsletter-form mb-4">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control border-0 bg-light"
                    placeholder="อีเมลของคุณ"
                    aria-label="Email"
                  />
                  <button className="btn btn-primary px-4" type="submit">
                    <i className="bi bi-send"></i>
                  </button>
                </div>
              </form>
              
              {/* Social Media */}
              <div className="social-links">
                <h6 className="text-white fw-bold mb-3">ติดตามเรา</h6>
                <div className="d-flex gap-3">
                  {[
                    { icon: "bi-facebook", url: "https://facebook.com", color: "#1877F2" },
                    { icon: "bi-twitter", url: "https://twitter.com", color: "#1DA1F2" },
                    { icon: "bi-instagram", url: "https://instagram.com", color: "#E4405F" },
                    { icon: "bi-linkedin", url: "https://linkedin.com", color: "#0077B5" },
                    { icon: "bi-youtube", url: "https://youtube.com", color: "#FF0000" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon d-flex align-items-center justify-content-center"
                      style={{ '--social-color': social.color }}
                    >
                      <i className={`bi ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-top border-secondary py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-light opacity-75 mb-0">
                © {currentYear} MyWebsite. สงวนลิขสิทธิ์ทุกประการ
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end gap-4">
                <Link href="/privacy" className="text-light text-decoration-none small">
                  นโยบายความเป็นส่วนตัว
                </Link>
                <Link href="/terms" className="text-light text-decoration-none small">
                  ข้อกำหนดการใช้งาน
                </Link>
                <Link href="/sitemap" className="text-light text-decoration-none small">
                  แผนผังเว็บไซต์
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-brand {
          border-left: 4px solid #0d6efd;
          padding-left: 1rem;
        }
        
        .footer-links a {
          transition: all 0.3s ease;
          padding: 0.25rem 0;
        }
        
        .footer-links a:hover {
          color: #0d6efd !important;
          transform: translateX(5px);
        }
        
        .newsletter-form .form-control {
          border-radius: 50px 0 0 50px;
        }
        
        .newsletter-form .btn {
          border-radius: 0 50px 50px 0;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.1rem;
        }
        
        .social-icon:hover {
          background: var(--social-color);
          color: white;
          transform: translateY(-3px);
        }
        
        .contact-info i {
          width: 20px;
          text-align: center;
        }
      `}</style>
    </footer>
  );
}
