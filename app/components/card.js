'use client';
import Image from "next/image";

export default function Card() {
  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h3 className="text-primary">Our Projects</h3>
        </div>
      </div>

      <div className="row g-4">
        {/* Card 1 */}
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
           <img
              src="/images/sliders/4.png"
              alt="Project 1"
              className="card-img-top"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-text">
                This is the first project in our portfolio.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
           <img
            src="/images/sliders/5.png"
            alt="Project 1"
            className="card-img-top"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-text">
                Our third featured project for this month.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-sm-6 col-md-4 mb-4">
          <div className="card">
           <img
            src="/images/sliders/6.png"
            alt="Project 1"
            className="card-img-top"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-text">
                Our third featured project for this month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

