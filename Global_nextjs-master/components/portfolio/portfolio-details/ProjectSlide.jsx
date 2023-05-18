import Image from "next/image";

const ProjectSlide = ({ slide }) => {
  const images = [slide?.image ?? "", slide?.image ?? "", slide?.image ?? ""];

  return (
    <div
      id="gallery-carousel"
      className="carousel slide me-xxl-5 md-mb-40"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <Image
              width={824}
              height={654}
              layout="responsive"
              src={image}
              className="d-block w-100"
              alt="media"
            />
          </div>
        ))}
      </div>
      {/* End carousel-inner */}

      
      {/* End next */}
    </div>
  );
};

export default ProjectSlide;
