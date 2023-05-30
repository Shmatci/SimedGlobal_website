import Seo from "../../components/common/Seo";
import DefaultFooter from "../../components/footer/DefaultFooter";
import DefaulHeader from "../../components/header/DefaulHeader";
import Banner from "../../components/home-page/home-1/Banner";
import Block from "../../components/home-page/home-1/Block";
import ContactForm from "../../components/home-page/home-1/ContactForm";
import Feature from "../../components/home-page/home-1/Feature";
import Hero from "../../components/home-page/home-1/Hero";
import WhyChoose from "../../components/home-page/home-1/WhyChoose";

const HomePage = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      <DefaulHeader />
      <Hero />
      <div className="fancy-feature-thirtyFour mt-50">
        <div className="container">
          <div className="row gx-xxl-5">
            <Feature />
          </div>
        </div>
      </div>

      <div className="fancy-feature-thirtyFive mt-150 md-mt-70">
        <div className="container" data-aos="fade-up">
          <Banner />
        </div>  
      </div>
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="ps-lg-5 ms-xxl-3">
                <div className="title-style-one mb-40">
                  <div className="sc-title text-uppercase">Why Choose Us</div>
                  <h2 className="main-title fw-500 tx-dark m0">
                    What our clients have to say about us.
                  </h2>
                </div>
                <WhyChoose />
              </div>
            </div>

            <div className="col-xxl-5 col-lg-6 order-lg-first">
              <Block />
            </div>
          </div>
        </div>
      </div>
      
      <div
        className="fancy-short-banner-thirteen pt-170 pb-170 mt-130 lg-mt-100 lg-pt-80 lg-pb-80 "
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper zn2 bg-white position-relative">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6 ms-auto order-lg-last">
                    <div className="text-wrapper">
                      <div className="title-style-one">
                        <h2 className="main-title fw-500 tx-dark m0">
                          Let’s talk with experience advisors.
                        </h2>
                      </div>
                      <p className="fs-20 tx-dark pt-20 m0">
                        Get in contact today by sending us your message.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 order-lg-first">
                    <div className="form-style-two md-mb-40">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default HomePage;
