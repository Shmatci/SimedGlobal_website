import Image from "next/image";

const Feature = () => {
  const features = [
    {
      background: "#00869d07",
      title: (
        <>
          We classify and register your medical devices across all continets.
        </>
      ),
      description: "Regulatory Issues",
      icon: "images/icon/icon_18.svg",
      width: "129",
      height: "165",
      delay: "100",
    },
    {
      background: "#00869d10",
      title: (
        <>
          Finding the best and especially trustworthy partner to be your distribution partner. 
        </>
      ),
      width: "129",
      height: "170",
      description: "Distribution / Sales",
      icon: "images/icon/icon_101.svg",
      delay: "200",
    },
    {
      background: "#00869d015",
      title: (
        <>
          Simed Global can act as your Authorized Representative or Responsible Person in both Europe and also within the UK.
        </>
      ),
      width: "129",
      height: "175",
      description: "Authorised Representative",
      icon: "images/icon/icon_102.svg",
      delay: "300",
    },
    {
      background: "#00869d20",
      title: (
        <>
           The regulatory Importer is similar to an EU Authorized Representative, and you must appoint one. 
        </>
      ),
      width: "129",
      height: "175",
      description: "Importer",
      icon: "images/icon/icon_102.svg",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-6 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <div
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <Image
              width={feature.width}
              height={feature.height}
              src={feature.icon}
              alt="icon"
              className="position-absolute"
            />
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
