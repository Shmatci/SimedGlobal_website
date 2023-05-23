import Image from "next/image";
import React from "react";

const Hero1 = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="image-bckg hero-banner-ten position-relative zn2">
      <div className="container" >
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500 tx-dark">
            At <span>Simed Global</span>
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
            Our mission is to bring world beating – 
            life changing IVD <strong>medical devices</strong> to the market to allow instant screening for illnesses in the population.
            </p>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
            We continuously research, innovate, and create new ways to improve medical diagnostics solutions together with our partners and investors.
            </p>
          </div>          
        </div>
      </div>
        <Image
              width={129}
              height={175}
              src="/images/icon/arrow-down.svg"
              alt="icon"
              className="position-absolute"
            />
      {/*
      <Image 
        width={487}
        height={649}
        src="/images/shape/bcg-2.png"
        alt="background"      
        className="lazy-img illustration-one"
        data-aos="fade-left"
        />
      <Image 
        width={837}
        height={658}
        src="/images/shape/bcg-1.png"
        alt="background"      
        className="lazy-img illustration-two"
        data-aos="fade-right"
        /> */}
      {/* End .container */}
    </div>
  );
};

export default Hero1;
