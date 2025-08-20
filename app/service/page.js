'use client';

export default function Service() {
  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center" style={{ background: 'linear-gradient(135deg, #212529 0%, #14532d 100%)' }}>
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-white mb-3 animate-fadeInUp">
              <i className="bi bi-gear-fill text-warning me-2"></i>บริการของเรา
            </h1>
            <p className="lead text-white-50 fs-5 animate-fadeInUp">เว็บไซต์นี้พร้อมให้บริการและช่วยเหลือคุณในหลายด้าน</p>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {[
            {
              icon: 'bi bi-globe2',
              title: 'เว็บไซต์แนะนำผลงาน',
              desc: 'นำเสนอโปรเจกต์ ผลงาน และประวัติผู้พัฒนาอย่างมืออาชีพ',
              color: 'text-primary'
            },
            {
              icon: 'bi bi-person-lines-fill',
              title: 'ระบบสมัครสมาชิก',
              desc: 'ลงทะเบียนและจัดการข้อมูลสมาชิกได้อย่างปลอดภัย',
              color: 'text-success'
            },
            {
              icon: 'bi bi-images',
              title: 'แกลเลอรี่ผลงาน',
              desc: 'ชมภาพรวมโปรเจกต์และผลงานในรูปแบบสวยงาม',
              color: 'text-warning'
            },
            {
              icon: 'bi bi-chat-dots-fill',
              title: 'ติดต่อสอบถาม',
              desc: 'ติดต่อเจ้าของเว็บหรือขอคำปรึกษาได้สะดวก',
              color: 'text-danger'
            },
            {
              icon: 'bi bi-shield-lock-fill',
              title: 'ความปลอดภัย',
              desc: 'ข้อมูลของคุณได้รับการปกป้องด้วยมาตรฐานสากล',
              color: 'text-info'
            }
          ].map((service, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 border-0 shadow-lg rounded-4 animate-fadeInUp" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
                <div className="card-body text-center p-4">
                  <div className={`mb-3 ${service.color}`}>
                    <i className={`${service.icon} fs-1`}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-2">{service.title}</h5>
                  <p className="card-text text-muted mb-0">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
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
      </div>
    </section>
  );
}

