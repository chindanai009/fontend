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
            src: "/images/sliders/4.png",
            desc: "This is the first project in our portfolio.",
          },
          {
            src: "/images/sliders/5.png",
            desc: "Our second featured project for this month.",
          },
          {
            src: "/images/sliders/6.png",
            desc: "Our third featured project with elegant design.",
          },
        ].map((item, index) => (
          <div className="col-sm-6 col-md-4" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-4 hover-card">
             <img
              src={item.src}
              alt={`Project ${index + 1}`}
              className="card-img-top rounded-top-4"
              style={{ objectFit: "cover", width: "75%", height: "200px" }}
              />
              <div className="card-body text-center">
                <p className="card-text text-muted">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for hover */}
      <style jsx>{`
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


