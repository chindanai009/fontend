'use client';

import { useEffect } from "react";
import Image from "next/image";

export default function Carousel() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const slides = [
    {
      src: "/images/sliders/1.png",
      title: "โปรเจกต์แรก",
      description: "ผลงานที่โดดเด่นและน่าประทับใจ"
    },
    {
      src: "/images/sliders/2.png",
      title: "โปรเจกต์ที่สอง",
      description: "นวัตกรรมใหม่ที่เปลี่ยนโลก"
    },
    {
      src: "/images/sliders/3.png",
      title: "โปรเจกต์ที่สาม",
      description: "ดีไซน์ที่สวยงามและใช้งานง่าย"
    }
  ];

  return (
    <div className="carousel-container">
      <div
        id="carouselExample"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner rounded-4 shadow-lg overflow-hidden">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="position-relative carousel-slide">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="carousel-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <div className="text-center text-white">
                    <h2 className="display-4 fw-bold mb-3 animate-slideUp">{slide.title}</h2>
                    <p className="lead mb-4 animate-slideUp" style={{animationDelay: '0.2s'}}>{slide.description}</p>
                    <button className="btn btn-light btn-lg rounded-pill px-4 animate-slideUp" style={{animationDelay: '0.4s'}}>
                      <i className="bi bi-arrow-right me-2"></i>เรียนรู้เพิ่มเติม
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Controls */}
        <button
          className="carousel-control-prev custom-control"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <div className="control-icon">
            <i className="bi bi-chevron-left"></i>
          </div>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next custom-control"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <div className="control-icon">
            <i className="bi bi-chevron-right"></i>
          </div>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}