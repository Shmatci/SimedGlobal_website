import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Link from "next/link";
import Devices from "../../components/devices/devices";
import Image from "next/image";

const Poc = () => {
  const solutions = [
    { text: "Mobile POC device" },
    { text: "No need for Phlebotomist" },
    { text: "CQC Doctor reviewed results" },
    { text: "No need to send to a laboratory" },
    { text: "Affordable with High ROI" },
  ];

  const devices = [
    { text: "Quick 15min testing" },
    { text: "Small and portable" },
    { text: "Simple finger pick of blood (currently available for 17 tests)" },
    { text: "One appointment/visit needed" },
    { text: "Total point of care testing solution" },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="POC Blood Tests" />
      <DefaulHeader />
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-100" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Point of Care
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Rapid in-house blood test for{" "}
                  <strong>POC instant health checks</strong>
                </h2>
                <p className="text-md tx-dark">
                  Simed Global specialise in fast effective testing devices and
                  solutions, <br />
                  what we call the 3T’s Tomorrows Technology Today
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30 mt-300">Our Goal.</h6>
                <p className="text-lg tx-dark">
                  As the healthcare landscape continues to evolve, accessible
                  and convenient options for individuals to receive health
                  screenings is increasingly being recognised.
                  <br /> Pharmacies, Diagnostic Centers and Clinics in community
                  settings will play an increasingly important role in the
                  provision of health services in the coming years and Simed
                  Global have the solution for you to easily become part of
                  this.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <Image
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                data-aos="fade-right"
              >
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">SOLUTION</div>
                  <h2 className="main-title fw-500 tx-dark"></h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                  Our solution has 5 key elements to ensure minimum disruption
                  for maximum impact.
                </p>
                <ul className="style-none list-item ">
                  {solutions.map((solution, index) => (
                    <li key={index}>{solution.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End .col */}

            {/* DEVICES */}
          </div>
        </div>
        {/* /.container */}
      </div>
      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="block-style-four" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">Devices</div>
                  <h2 className="main-title fw-500 tx-dark"></h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  The devices use the advanced method of Time-Resolved
                  Fluorescence Immunoassay (TRFIA), for the in-vitro
                  quantitative detection of bio-markers for diabetes, infectious
                  diseases, cardiovascular diseases, sex hormones, gastric
                  diseases, thyroid function, tumours, Covid-19 and other
                  diseases.
                </p>
                <div className="row pb-60 ">
                  <Devices />
                </div>
                  <ul className="style-none list-item ">
                    {devices.map((device, index) => (
                      <li key={index}>{device.text}</li>
                    ))}
                  </ul>
              </div>
              {/* /.block-style-four */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* RESULTS */}
      <div className="team-section-two position-relative pt-200 lg-pt-120">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
              <div className="col-lg-12" data-aos="fade-right">
                <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">
                    GP Reviewed Results
                  </h2>
                </div>
                {/* /.title-style-six */}
                <div className="block-style-four" data-aos="fade-right">
                  <p className="fs-20 pt-10 pb-30 lg-pb-20">
                    Results are interpreted by our CQC registered partner GPs
                    and physicians and sent direct to customers. Each partner
                    has their own registration page for patients to submit their
                    data and receive the results directly to the registered
                    email. Partners are sent our patients and receive full
                    access to our marketing bundle to support your launch.
                  </p>
                  <ul className="text-center list-item result-text">
                    <p className="fs-20 pt-10 pb-10 lg-pb-20">
                      <strong>Results</strong> &#8594; Emailed directly to the
                      patient
                    </p>
                    <p className="fs-20 pt-10 pb-10 lg-pb-20">
                      <strong>Doctor Notes</strong> &#8594; Clinics medical
                      comments
                    </p>
                    <p className="fs-20 pt-10 pb-10 lg-pb-20">
                      <strong>Review</strong> &#8594; Included for results out
                      of range
                    </p>
                  </ul>
                </div>

                {/*  TESTS PARAMETARS */}

                <div
                  className="fancy-short-banner mt-80 lg-mt-80"
                  data-aos="fade-up"
                >
                  <div className="container">
                    <div className="bg-wrapper pt-40 pb-40 lg-pt-40 lg-pb-40">
                      <div className="row">
                        <div className="col-xl-10 col-md-11 m-auto">
                          <div className="row align-items-center">
                            <div className="col-lg-12">
                              <div className="text-wrapper text-center text-lg-start md-pb-30">
                                <div className="sc-title fs-18 pb-10">
                                  37 quantitative rapid tests. Results between 3
                                  &#8722; 15 minutes.&emsp;
                                  <Link href="/table">
                                    <h4 className="fw-500 m0">
                                      <u>View parameters!</u>
                                    </h4>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            {/* End .col-6 */}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* /.bg-wrapper */}
                  </div>
                </div>
                <div className="container pt-50">
                  <Image
                    src="/images/media/body.jpg"
                    width={580}
                    height={531}
                    alt="body"
                    className="mx-auto d-block"
                  />
                </div>
                <div className="col-lg-12 pt-100" data-aos="fade-right">
                  <div className="title-style-six text-lg-start pb-40 lg-pb-20 md-pb-10">
                    <h2 className="sc-title-two fw-500 tx-dark">
                    WHAT ARE THE BENEFITS OF POCT?
                    </h2>
                  </div>
                  {/* /.title-style-six */}
                  <div className="block-style-four" data-aos="fade-right">
                    <p className="fs-20 pt-10 lg-pb-20">
                      &#x2022; Tests can be completed in community and primary care settings, such as clinics, pharmacies, <br /> 
                      &emsp;nursing homes and public facilities like health centres
                    </p>
                    <p className="fs-20 pt-10 lg-pb-20">
                      &#x2022; Eliminate time and costs as samples don’t have to be sent to labs for results
                    </p>
                    <p className="fs-20 pt-10 lg-pb-20">
                    &#x2022; Accurate and reliable results delivered within minutes instead of hours or days
                    </p>
                    <p className="fs-20 pt-10 lg-pb-20">
                    &#x2022; Enables clinicians to support the timely diagnosis, monitoring and treatment of patients
                    </p>
                    <p className="fs-20 pt-10 lg-pb-20">
                      &#x2022; Reduced impact and cost of emergency care due to appropriate escalation
                    </p>
                    <p className="fs-20 pt-10 lg-pb-20">
                      &#x2022; Environmental sustainability benefits thanks to the reduction of associated transport and fuel cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
      </div>

      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Want to get in contact?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Don’t hesitate to send us message.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Click here to get in touch!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      <DefaultFooter />
    </>
  );
};

export default Poc;
