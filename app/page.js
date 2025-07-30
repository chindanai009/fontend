'use client';

import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="min-h-screen font-modern" style={{
      background: 'linear-gradient(135deg, #14532d 0%, #3bb78f 100%)',
      minHeight: '100vh',
      fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'"
    }}>
      {/* Hero Section with Green Pastel Gradient */}
      <section className="hero-section position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #14532d 0%, #3bb78f 100%)',
        minHeight: '100vh'
      }}>
        <div className="container-fluid px-0">
          <div className="row align-items-center min-vh-100 g-0">
            <div className="col-lg-12">
              <div className="hero-content text-center text-white py-5">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h1 className="display-2 fw-bold mb-4 animate-fadeInUp">
                        <i className="bi bi-stars text-warning me-2"></i>
                        ยินดีต้อนรับสู่เว็บไซต์ของเรา
                      </h1>
                      <p className="lead fs-4 mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        <i className="bi bi-magic me-2 text-warning"></i>
                        เรามีผลงานและโปรเจกต์ที่น่าสนใจ พร้อมให้คุณติดตาม
                        <i className="bi bi-lightbulb text-warning ms-2"></i>
                      </p>
                      <div className="d-flex gap-3 justify-content-center flex-wrap animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
                          <i className="bi bi-rocket-takeoff me-2"></i>เริ่มต้นใช้งาน
                        </button>
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

      {/* Features Section with Green Pastel Gradient */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #1e3a34 0%, #43e97b 100%)'
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

      {/* Carousel Section with Green Pastel Gradient */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
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

      {/* Card Section with Green Pastel Gradient */}
      <main className="py-5" style={{
        background: 'linear-gradient(135deg, #0f9b0f 0%, #43e97b 100%)'
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

      {/* CTA Section with Green Pastel Gradient */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)'
      }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3 text-dark">
                <i className="bi bi-stars text-warning me-2"></i>พร้อมเริ่มต้นแล้วหรือยัง?
              </h2>
              <p className="lead mb-4 text-dark opacity-75">ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี</p>
              <button className="btn btn-dark btn-lg px-4 py-2 rounded-pill">
                <i className="bi bi-headset-vr me-2"></i>ติดต่อเรา
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;600;700&family=Kanit:wght@400;600;700&family=Inter:wght@400;600;700&display=swap');
        body, .font-modern {
          font-family: 'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif' !important;
          font-weight: 400;
          letter-spacing: 0.01em;
          color: #f3f4f6;
        }
        h1, h2, h3, h4, h5, h6, .display-2, .display-5 {
          font-family: 'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif' !important;
          font-weight: 700;
          letter-spacing: 0.01em;
        }
        .lead, .card-title, .card-text, .fw-bold {
          font-family: 'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif' !important;
        }
        .btn, .nav-link, .navbar-brand, .brand-text {
          font-family: 'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif' !important;
        }
      `}</style>
    </div>
  );
}