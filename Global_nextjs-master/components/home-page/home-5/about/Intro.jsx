const Intro = () => {
  return (
    <>
      <div className="d-flex mt-70 mb-20 lg-mt-40 lg-mb-10">
        <p className="text-lg m0 ps-lg-5 text-warning">
          Our screening devices are designed to meet all needs, with options
          ranging from high throughout desktop models to portable handheld
          devices.
        </p>
      </div>
      <div className="d-flex mt-70 mb-60 lg-mt-40 lg-mb-10">
        <p className="text-lg m0 ps-lg-5">
          We also provide an affordable game changing total solution for POC
          blood tests for health screening in community settings – Pharmacies,
          GP’s, Primary Care etc… that includes:
        </p>
        <p className="text-lg m0 ps-lg-5">
          Mobile screening device with over 35 parameters, no need for a
          phlebotomist and with Instant CQC registered Doctor reviewed results
          and reports generated, for more information{" "}
          <a href="../ttt/poc">
            <strong>click here</strong>
          </a>
          .
        </p>
      </div>
      <div className="title-style-eleven mb-40 ml-1">
        <h2 className="main-title text-center tx-dark">
          We also have our own full range of {" "}
          <a
            href="../ttt/selfHealthTests"
            className="text-decoration-underline"
          >
            <strong>Self Health Home Tests</strong>
          </a>
        </h2>
      <a href="../ttt/selfHealthTests" className="mx-auto d-block">
        <img
          width={550}
          height={385}
          src="/images/gallery/front_image.png"
          alt="Self Health Test"
          className="mt-50 rounded mx-auto d-block img-thumbnail"
        />
        </a>
      </div>
      <div className="d-flex mt-70 mb-60 lg-mt-40 lg-mb-10">
        <p className="text-lg m0 ps-lg-5">
          We are proud to be working with the Liverpool School of Tropical
          Medicine and the University of Liverpool Hospital together with our
          investors on our new instant diagnostic technologies for population
          diseases, that will be launching in the near future.
        </p>
      </div>
    </>
  );
};

export default Intro;
