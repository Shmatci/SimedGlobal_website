import Image from "next/image";
import React from "react";

const Hero1 = () => {
  return (
    <div className="image-bckg hero-banner-ten position-relative zn2">
      <div className="container" >
        <div className="row">
          <div className="col-lg-12 col-md-10 m-auto" data-aos="fade-up">
            <h1 className="hero-heading fw-500 tx-dark">
            <span>Simed Global</span>
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
            At Simed Global our mission is to bring world beating
            – life changing IVD <strong>medical devices</strong> to the 
            market to allow instant screening for illnesses in the population.
            We continuously research, innovate, and create new ways to improve medical diagnostics solutions together with our partners and investors.
            </p>
          </div> 
          <div className="col-12 down-arrow">
            
            <Image
                  width={39}
                  height={75}
                  src="/images/icon/down-arr.svg"
                  alt="icon"
                  className="mx-auto d-block mt-100"
                />
            </div>         
        </div>
      </div>
      
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
