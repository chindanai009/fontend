"use client"

export default function About() {
  return (
  <section className="min-vh-100 d-flex align-items-center justify-content-center font-modern" style={{ background: 'linear-gradient(135deg, #212529 0%, #14532d 100%)' }}>
  <div className="container py-5 font-modern">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            <div className="card shadow-lg border-0 rounded-4 p-4 animate-fadeInUp bg-white bg-opacity-90 font-modern">
              <div className="text-center mb-4">
                <img src="/images/sliders/4.jpg" alt="Profile" className="rounded-circle shadow mb-3" style={{ width: 100, height: 100, objectFit: 'cover', border: '4px solid #3bb78f' }} />
                <h1 className="fw-bold display-5 text-success mb-1">Chindanai Promdang</h1>
                <p className="text-secondary mb-2 fs-5">Web Developer &amp; Designer</p>
                <span className="badge bg-success bg-opacity-75 fs-6 mb-2">ผู้สร้างเว็บไซต์นี้</span>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold text-dark mb-2">ประวัติย่อ</h5>
                <p className="text-secondary mb-0" style={{ lineHeight: 1.7 }}>
                  สวัสดีครับ ผมชื่อ <b>ชินดนัย พรมแดง</b> (Chindanai Promdang) เป็นนักพัฒนาเว็บไซต์มือใหม่<br/>
                  มีประสบการณ์ในการสร้างเว็บแอปพลิเคชันเล็กหน่อย <b>React, Next.js, Bootstrap</b> และเทคโนโลยีสมัยใหม่อื่นๆ<br/>
                  เว็บไซต์นี้ถูกสร้างขึ้นเพื่อเป็นตัวอย่างผลงานและแบ่งปันความรู้ด้านการพัฒนาเว็บให้แก่ท่านอื่นๆ
                </p>
              </div>
              <div className="mb-3">
                <h5 className="fw-bold text-dark mb-2">ทักษะที่ใช้ในการพัฒนาเว็ปไซต์</h5>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-success bg-opacity-75">React</span>
                  <span className="badge bg-success bg-opacity-75">Next.js</span>
                  <span className="badge bg-success bg-opacity-75">Bootstrap</span>
                  <span className="badge bg-success bg-opacity-75">JavaScript</span>
                  <span className="badge bg-success bg-opacity-75">UI/UX Design</span>
                  <span className="badge bg-success bg-opacity-75">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
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
    </section>
  );
}
