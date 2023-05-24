import Image from "next/image";

const Feature = () => {
  const features = [
    {
      background: "#00869d10",
      title: (
        <>
          Regulatory Issues          
        </>
      ),
      description: "We classify and register your medical devices across all continents and develop the regulatory plan. We find the best option for you to either own your personal registration or enter into collaboration with a hosting partner.",
      width: "129",
      height: "165",
      delay: "100",
    },
    {
      background: "#00869d13",
      title: (
        <>
          Distribution / Sales 
        </>
      ),
      width: "129",
      height: "170",
      description: "Finding the best and especially trustworthy partner to be your distribution partner is often one of the biggest challenges in foreign territory. We will make sure to identify companies and professionals matching your requirements and objectives and with whom we already have a proven track record",
      delay: "200",
    },
    {
      background: "#00869d17",
      title: (
        <>
          Authorised Representative
        </>
      ),
      width: "129",
      height: "175",
      description: "If you are a manufacturer of Medical Devices and you are based outside the EU or UK you are required under the EU directives or UK Legislation to appoint an Authorized Representative or Responsible Person. Simed Global can act as your Authorized Representative or Responsible Person in both Europe and also within the UK. We are able to offer the service of operating as your Representative in either the EU or the UK.",
      delay: "300",
    },
    {
      background: "#00869d20",
      title: (
        <>
          Importer 
        </>
      ),
      width: "129",
      height: "175",
      description: "New medical device and IVD regulations in the European Union impose strict new requirements on manufacturers and elevate the role of the importer (Economic Operator) in placing devices on these markets. The regulatory Importer is similar to an EU Authorized Representative, and you must appoint one. There are many reasons to select Simed Global to act as your single independent importer for all European markets.",
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
          </div>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
