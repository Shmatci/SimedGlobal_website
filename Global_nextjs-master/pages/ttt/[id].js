import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import ProjectDetails from "../../components/portfolio/portfolio-details/ProjectDetails";
import ProjectSlide from "../../components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "../../components/portfolio/CallToAction";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import testsData from "../../data/tests";
import TestsDetailsTitle from "../../components/portfolio/portfolio-details/TestsDetailsTitle";
import ProductSpec from "../../components/portfolio/portfolio-details/ProductSpec";
import OrderingInfo from "../../components/portfolio/portfolio-details/OrderingInfo";

const DynamicPortfolioDetails = () => {
  const router = useRouter();
  const [portfolio, setPortfolio] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setPortfolio(testsData.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <>
      <Seo pageTitle="Self Health Test"/>
      <DefaulHeader />
      <TestsDetailsTitle portfolio={portfolio} />
      <div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ProjectSlide slide={portfolio} />
                {/* /#gallery-carousel */}
              </div>
              {/* End .col-lg-8 */}

              <div className="col-lg-4" data-aos="fade-left">
                <div className="sidebar ms-xl-5">
                  <h3 className="mb-20">{portfolio.fullName}</h3>
                  <p className="border-bottom pb-40 mb-35 lg-pb-20">
                    {portfolio.about}
                  </p>
                  <div className="row">
                    <ProjectDetails details={portfolio} />
                  </div>
                  {/* End .row */}

                </div>
              </div>
              {/* End col-lg-4 */}
            </div>
            {/* End .row */}

            <div className="col-xl-9  mt-120 lg-mt-80">
              <div className="title-style-twelve mb-45 lg-mb-30 wow fadeInUp">
                <div className="sc-title fst-italic position-relative">
                PRODUCT SPECIFICATION
                </div>
                <h2 className="main-title fw-500 tx-dark"></h2>
              </div>
              {/* /.title-style-twelve */}
              
              <div>
                <ProductSpec  />
              </div>

              <div
                className="title-style-twelve mb-45 mt-120 lg-mb-30 lg-mt-80 wow fadeInUp"
              >
                <div className="sc-title fst-italic position-relative">
                ORDERING INFORMATION
                </div>
                <div>
                <OrderingInfo  />
              </div>
              </div>
            </div>
           
            {/* /.project-pagination */}
          </div>
          {/* End .container */}
        </div>
        {/* /.project-desctiption */}
      </div>
      <CallToAction />
      <DefaultFooter />
    </>
  );
};

export default DynamicPortfolioDetails;
