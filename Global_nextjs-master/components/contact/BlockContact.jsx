import Image from "next/image";

const BlockContact = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_147.svg",
      title: "London, UK",
      content: "341 Regents Park Road, N3 1DP",
      link: "tel:+44 20 8343 4884",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_147.svg",
      title: "Liverpool, UK",
      content: "1 Pacific Road, CH41 1LJ",
      link: "tel:+44 20 151 305 3188",
      delay: "100",
    },
    {
      icon: "/images/icon/icon_147.svg",
      title: "Dublin, UK",
      content: "Northwood Court, DO9 T266",
      link: "tel:+44 151 305 3188",
      link: "info@simedglobal.com",
      delay: "100",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-4"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto filter">
              <Image width={30} height={30} src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
