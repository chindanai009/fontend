'use client';

import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="min-h-screen font-modern" style={{
      background: "url('/images/sliders/8.jpg') center center / cover no-repeat fixed",
      minHeight: '100vh',
      fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"
    }}>
      {/* Hero Section with Transparent Background */}
      <section className="hero-section position-relative overflow-hidden" style={{
        background: 'rgba(0,0,0,0.35)',
        minHeight: '100vh',
        boxShadow: 'none',
        border: 'none',
        filter: 'none',
      }}>
        <div className="container-fluid px-0">
          <div className="row align-items-center min-vh-100 g-0">
            <div className="col-lg-12">
              <div className="hero-content text-center text-white py-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-2 fw-bold mb-4 animate-fadeInUp project-title">
                      <i className="bi bi-stars text-warning me-2"></i>
                      ยินดีต้อนรับสู่เว็บไซต์ของเรา
                      </h1>
                      <p className="lead fs-4 mb-4 animate-fadeInUp project-desc" style={{animationDelay: '0.2s'}}>
                      </p>
                      <div className="d-flex gap-3 justify-content-center flex-wrap animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <button className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
                          <i className="bi bi-info-circle me-2"></i>เรียนรู้เพิ่มเติม
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Background Overlay */}
        <div className="hero-bg position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(45deg, rgba(59,183,143,0.15) 0%, transparent 100%)',
          opacity: 0.3
        }}></div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <div className="scroll-arrow animate-bounce">
            <i className="bi bi-chevron-down text-white fs-3"></i>
          </div>
        </div>
      </section>

      {/* Features Section with Transparent Background */}
      <section className="py-5" style={{
        background: 'rgba(0,0,0,0.25)',
        boxShadow: 'none',
        border: 'none',
        filter: 'none',
      }}>
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3 text-white">
                <i className="bi bi-bookmark-star-fill text-warning me-2"></i>
                ทำไมต้องเลือกเรา
              </h2>
              <p className="lead text-white opacity-75">คุณสมบัติที่ทำให้เราแตกต่าง</p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "bi-lightning-charge-fill",
                title: "รวดเร็ว",
                desc: "ประสิทธิภาพสูง โหลดเร็ว",
                color: "text-warning"
              },
              {
                icon: "bi-shield-fill-check",
                title: "ปลอดภัย",
                desc: "ความปลอดภัยระดับสูง",
                color: "text-success"
              },
              {
                icon: "bi-palette-fill",
                title: "สวยงาม",
                desc: "ดีไซน์ที่ทันสมัย",
                color: "text-primary"
              }
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm hover-lift" style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div className="card-body text-center p-4">
                    <div className={`feature-icon ${feature.color} mb-3`}>
                      <i className={`bi ${feature.icon} fs-1`}></i>
                    </div>
                    <h5 className="card-title fw-bold">{feature.title}</h5>
                    <p className="card-text text-muted">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section with Transparent Background */}
      <section className="py-5" style={{
        background: 'rgba(0,0,0,0.25)',
        boxShadow: 'none',
        border: 'none',
        filter: 'none',
      }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3 text-white">
                <i className="bi bi-images text-warning me-2"></i>แกลเลอรี่ผลงาน
              </h2>
              <p className="lead text-white opacity-75">ภาพรวมผลงานของเรา</p>
            </div>
          </div>
          <Carousel />
        </div>
      </section>

      {/* Card Section with Wine Purple Gradient */}
      <main className="py-5" style={{
        background: 'transparent',
        boxShadow: 'none',
        border: 'none',
        filter: 'none',
      }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3 text-white">
                <i className="bi bi-collection-fill text-warning me-2"></i>โปรเจกต์ของเรา
              </h2>
              <p className="lead text-white opacity-75">ผลงานที่เราภูมิใจนำเสนอ</p>
            </div>
          </div>
          <Card />
        </div>
      </main>

      {/* Footer */}
      <Footer />

  {/* Custom heading/desc styles moved to globals.css for Next.js compatibility */}
    </div>
  );
}