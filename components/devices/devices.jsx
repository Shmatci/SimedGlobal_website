import Image from "next/image";

const devices = [
  {
    id: 1,
    name: "PL Maxi (High Throughput)",
    imgSrc: "/images/media/large.png",
  },
  {
    id: 2,
    name: "PL Medi (Portable)",
    imgSrc: "/images/media/midi.png",
  },
  {
    id: 3,
    name: "PL Mini (Handheld)",
    imgSrc: "/images/media/mini.jpg",
  },
  
];

const Devices = () => {
  return (
    <>
      {devices.map((device) => (
        <div
          key={device.id}
          className="col-md-3"
          data-aos="fade-up"
          data-aos-delay={`${device.id * 100}`}
        >
          <div className="team-block-two mt-40">
            <div className="img-meta position-static">
              <Image
                width={312}
                height={281}
                src={device.imgSrc}
                alt={device.name}
                className="lazy-img team-img w-100"
              />
              <div className="info text-center">
                <h5 className="text-muted fs-20 mb-5">{device.name}</h5>
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-two */}
        </div>
        /* End .col-3 */
      ))}
    </>
  );
};

export default Devices;
