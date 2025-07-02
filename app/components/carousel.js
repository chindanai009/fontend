"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const images = [
    "/images/sliders/1.png",
    "/images/sliders/2.png",
    "/images/sliders/3.png",
  ];

  return (
    <div
      id="carouselExample"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner rounded-4 shadow overflow-hidden">
        {images.map((src, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="position-relative w-100" style={{ aspectRatio: "16/6" }}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover w-100 h-100"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

      {/* Styling */}
      <style jsx>{`
        .carousel-inner {
          max-height: 600px;
        }
        @media (max-width: 768px) {
          .carousel-inner {
            max-height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
