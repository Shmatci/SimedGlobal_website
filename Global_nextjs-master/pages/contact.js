import Seo from "../components/common/Seo";
import BlockContact from "../components/contact/BlockContact";
import ContactForm from "../components/contact/ContactForm";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaulHeader";

const contact = () => {
  return (
    <>
      <Seo pageTitle="Contact" />
      <DefaulHeader />
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text-center m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  Contact info
                </div>
                <h2 className="main-title fw-500 tx-dark">Get in Touch.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2 className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40 wow fadeInUp">
                Any question? <br />Send us message.
              </h2>
            </div>
            <div className="col-md-6 offset-md-3">
              <div className="form-style-two md-mb-40">
              <ContactForm />
              </div>
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default contact;
