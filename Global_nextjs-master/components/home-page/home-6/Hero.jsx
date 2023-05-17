
const Hero = () => {
  return (
    <>

      <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150">

        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="hero-heading fw-normal font-recoleta position-relative">
                <img
                  src="/images/shape/shape_25.svg"
                  alt="shape"
                  className="lazy-img shapes line-shape"
                />
                At Simed Global 
                <span className="position-relative d-inline-block">
                we specialise in bringing fast,
                </span><br />
                non-invasive, health screening solutions to the market.
              </h1>
              <p className="text-lg mb-75 pt-20 lg-mb-50 lg-pt-10">
              All our devices and tests significantly reduce costs, whilst providing valuable information for patients and physicians in a timely manner, to prevent disease progression and potentially save lives.
              </p>
              
            </div>
          </div>
          {/* End .row */}

          
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;
