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
              <div className="col-lg-8" data-aos="fade-right">
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
              <div
                className="title-style-twelve mb-45 lg-mb-30 wow fadeInUp"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  Overview
                </div>
                <h2 className="main-title fw-500 tx-dark"></h2>
              </div>
              {/* /.title-style-twelve */}
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullaum laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit volupta velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p data-aos="fade-up">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum magna quis
                nostured.
              </p>
              <div className="row">
                <div className="col-xl-8">
                  <div
                    className="title-style-twelve mb-45 pt-75 lg-pt-40 lg-mb-30 wow fadeInUp"
                    data-aos="fade-up"
                  >
                    <div className="sc-title fst-italic position-relative">
                      Work Proccess
                    </div>
                    <h2 className="main-title fw-500 tx-dark">
                      Find out the design solution.
                    </h2>
                  </div>
                  {/* /.title-style-twelve */}
                </div>
              </div>
              <p data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p data-aos="fade-up">
                Enim eu turpis egestas pretium aenean pharetra. Dui accumsan sit
                amet nulla facilisi morbi tempus iaculis. Eu ultrices vitae
                auctor eu augue. Sed turpis tincidunt id aliquet risus Purus in
                massa tempor nec feugiat nisl pretium fusce. Feugiat vivamus at
                augue eget arcu dictum. Gravida quis blandit turpis cursus in
                hac habitasse platea dictumst.
              </p>

              <div
                className="title-style-twelve mb-45 mt-120 lg-mb-30 lg-mt-80 wow fadeInUp"
                data-aos="fade-up"
              >
                <div className="sc-title fst-italic position-relative">
                  Work Proccess
                </div>
                <h2 className="main-title fw-500 tx-dark">Final Result</h2>
              </div>
              {/* /.title-style-twelve */}

              <p data-aos="fade-up">
                Content creators and human resources personnel are able to
                seamlessly update the website through graphical interfaces, and
                the site simply rebuilds itself along with search engine indexes
                as the OpenWeb team continues to create.
              </p>
              <p data-aos="fade-up">
                Enim eu turpis egestas pretium aenean pharetra. Dui accumsan sit
                amet nulla facilisi mor tempu iaculis. Eu ultrices vitae auctor
                eu augue. Sed turpis tincidunt id aliquet risus Purus in massa
                tempor nec feugiat nisl pretium fusce. Feugiat vivamus at augue
                eget arcu dictum. Gravida quis blandit turpis cursus in hac
                habitasse platea dictumst.
              </p>
            </div>
           
            {/* /.project-pagination */}
          </div>
          {/* End .container */}
        </div>
        {/* /.project-desctiption */}
      </div>
      {/* /.project-details */}

      {/*
			=====================================================
				Fancy Short Banner Twelve
			=====================================================
			*/}
      <CallToAction />
      <DefaultFooter />
    </>
  );
};

export default DynamicPortfolioDetails;
