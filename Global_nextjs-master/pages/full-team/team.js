import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Team from "../../components/team/Team";
import CallToAction from "../../components/team/CallToAction";

const TeamV1 = () => {
  return (
    <>
      <Seo pageTitle="Our Team" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Our Team
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Simed Global proudly presents:
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      <div className="team-section-two mt-20">
        <div className="container">
          <div className="wrapper border-bottom pb-120 lg-pb-80 position-relative">
            <div className="row">
              <Team />
            </div>
            {/* End  call to action*/}
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.team-section-two */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default TeamV1;
