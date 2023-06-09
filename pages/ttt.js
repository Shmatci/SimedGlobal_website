import Seo from "../components/common/Seo";
import DefaultFooter from "../components/footer/DefaultFooter";
import DefaulHeader from "../components/header/DefaulHeader";
import Hero from '../components/home-page/home-4/Hero'
import Intro from '../components/home-page/home-4/Intro'

const Ttt = () => {
  return (
    <>
      <Seo pageTitle="TTT" />
      <DefaulHeader />
      <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto wow fadeInUp">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative d-inline-block">
                  3T&apos;s
                </div>
                <h2 className="main-title fw-500 tx-dark">Tomorrow&apos;s Technology Today</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-section-one mt-60 lg-mt-30">
        
      <div className="container">
          <div className="row">
            <Hero />
          </div>
        </div>
        
        <div className="container">
          <div className="row">
            <Intro />
          </div>
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default Ttt;
