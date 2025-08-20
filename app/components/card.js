'use client';

export default function Card() {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold text-primary">Our Projects</h2>
          <p className="text-muted">
            โปรเจกต์ที่เราภูมิใจนำเสนอในเดือนนี้
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="row g-4">
        {[
          {
            src: "/images/sliders/1.jpg",
            desc: "911 Turbo S",
          },
          {
            src: "/images/sliders/2.jpg",
            desc: "GT4 RS",
          },
          {
            src: "/images/sliders/3.jpg",
            desc: "911 GT3 RS",
          },
        ].map((item, index) => (
          <div className="col-sm-6 col-md-4" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-4 hover-card">
              <div className="card-img-container">
                <img
                  src={item.src}
                  alt={`Project ${index + 1}`}
                  className="card-img-top rounded-top-4"
                />
              </div>
              <div className="card-body text-center">
                <p className="card-text text-muted">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for hover */}
      <style jsx>{`
        .card-img-container {
          width: 100%;
          height: 220px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        .card-img-top {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}


