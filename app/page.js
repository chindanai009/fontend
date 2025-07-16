'use client';

import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="hero-section position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                        ยินดีต้อนรับสู่เว็บไซต์ของเรา
                      </h1>
                      <p className="lead fs-4 mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                        เรามีผลงานและโปรเจกต์ที่น่าสนใจ พร้อมให้คุณติดตาม
                      </p>
                      <div className="d-flex gap-3 justify-content-center flex-wrap animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                        <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
                          <i className="bi bi-play-circle me-2"></i>เริ่มต้นใช้งาน
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
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
          opacity: 0.3
        }}></div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <div className="scroll-arrow animate-bounce">
            <i className="bi bi-chevron-down text-white fs-3"></i>
          </div>
        </div>
      </section>

      {/* Features Section with Gradient */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      }}>
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3 text-white">ทำไมต้องเลือกเรา</h2>
              <p className="lead text-white opacity-75">คุณสมบัติที่ทำให้เราแตกต่าง</p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "bi-lightning-charge",
                title: "รวดเร็ว",
                desc: "ประสิทธิภาพสูง โหลดเร็ว",
                color: "text-warning"
              },
              {
                icon: "bi-shield-check",
                title: "ปลอดภัย",
                desc: "ความปลอดภัยระดับสูง",
                color: "text-success"
              },
              {
                icon: "bi-palette",
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

      {/* Carousel Section with Gradient */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3 text-white">แกลเลอรี่ผลงาน</h2>
              <p className="lead text-white opacity-75">ภาพรวมผลงานของเรา</p>
            </div>
          </div>
          <Carousel />
        </div>
      </section>

      {/* Card Section with Gradient */}
      <main className="py-5" style={{
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3 text-white">โปรเจกต์ของเรา</h2>
              <p className="lead text-white opacity-75">ผลงานที่เราภูมิใจนำเสนอ</p>
            </div>
          </div>
          <Card />
        </div>
      </main>

      {/* CTA Section with Gradient */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
      }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-3 text-dark">พร้อมเริ่มต้นแล้วหรือยัง?</h2>
              <p className="lead mb-4 text-dark opacity-75">ติดต่อเราวันนี้เพื่อรับคำปรึกษาฟรี</p>
              <button className="btn btn-dark btn-lg px-4 py-2 rounded-pill">
                <i className="bi bi-telephone me-2"></i>ติดต่อเรา
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}