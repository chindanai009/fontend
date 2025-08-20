"use client"

export default function Contact() {
  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #212529 0%, #14532d 100%)', fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'" }}>
      <div className="container py-5" style={{ fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'" }}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 p-4 animate-fadeInUp bg-white bg-opacity-90" style={{ fontFamily: "'Prompt', 'Kanit', 'Inter', 'Roboto', 'sans-serif'" }}>
              <div className="text-center mb-4">
                <h1 className="fw-bold display-4 text-success mb-2">Contact</h1>
                <p className="text-secondary mb-0 fs-5">ติดต่อเจ้าของเว็บไซต์หรือสอบถามข้อมูลเพิ่มเติมได้ที่ช่องทางด้านล่าง</p>
              </div>
              <div className="list-group list-group-flush gap-3">
                <div className="list-group-item d-flex align-items-center gap-3 bg-success bg-opacity-10 rounded-3 border-0 mb-2 py-3 px-3">
                  <i className="bi bi-envelope-fill text-success fs-3"></i>
                  <span className="fw-semibold text-dark">อีเมล:</span>
                  <a href="mailto:ice.chin14@email.com" className="text-success fw-bold text-decoration-none ms-1">ice.chin14@email.com</a>
                </div>
                <div className="list-group-item d-flex align-items-center gap-3 bg-success bg-opacity-10 rounded-3 border-0 mb-2 py-3 px-3">
                  <i className="bi bi-telephone-fill text-success fs-3"></i>
                  <span className="fw-semibold text-dark">โทรศัพท์:</span>
                  <a href="tel:098-6323408" className="text-success fw-bold text-decoration-none ms-1">098-632-3408</a>
                </div>
                <div className="list-group-item d-flex align-items-center gap-3 bg-success bg-opacity-10 rounded-3 border-0 mb-2 py-3 px-3">
                  <i className="bi bi-facebook text-success fs-3"></i>
                  <span className="fw-semibold text-dark">Facebook:</span>
                  <a href="https://facebook.com/yourpage" target="_blank" rel="noopener" className="text-success fw-bold text-decoration-none ms-1">IC EN Zc </a>
                </div>
                <div className="list-group-item d-flex align-items-center gap-3 bg-success bg-opacity-10 rounded-3 border-0 mb-2 py-3 px-3">
                  <i className="bi bi-line text-success fs-3"></i>
                  <span className="fw-semibold text-dark">LINE:</span>
                  <span className="text-success fw-bold ms-1">@ICECHIN✓</span>
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