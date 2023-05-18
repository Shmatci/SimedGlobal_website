import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Partners from "../../components/services/Partners";
import Faq from "../../components/services/Faq";
import Testimonial from "../../components/home-page/home-3/Testimonial";
import Block from "../../components/services/Block";
import Team1 from "../../components/team/Team1";
import Link from "next/link";
import Counter from "../../components/about/Counter";

const FerritinTest = () => {
  const features = [
    { text: "Amazing communication." },
    { text: "Best trending designing experience." },
    { text: "Email & Live chat." },
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
      <Seo pageTitle="Ferritin Test" />
      <DefaulHeader />
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  More About us.
                </div>
                <h2 className="main-title fw-500 tx-dark">
                Our mission is to bring the best life saving technologies to the global market.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Our Goal.</h6>
                <p className="text-lg tx-dark">
                Developing our own technology and working closely with early stage Medical Device 
                start ups, Simed Global turns innovative ideas into significant technologies with 
                a global reach. Our mission is to bring the best life saving technologies to the 
                global market. Our commitment is to continuously identify, invest and work closely 
                with our partners to produce outstanding results for them and our investors.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
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
                  <div className="sc-title-two text-uppercase">WHY US</div>
                  <h2 className="main-title fw-500 tx-dark">
                  Your ideal partner
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                Made up of passionate, dedicated professionals our team has extensive 
                connections and expertise in regulatory affairs and compliance to technical 
                know-how, operations and marketing, distribution, sales and strategic proficiency. <br />
                This approach, combined with access to <strong>Simed Global’s</strong> extensive worldwide network, 
                provides companies with unparalleled opportunities for growth and success.
                </p>
                <ul className="style-none list-item">
                  {features.map((feature, index) => (
                    <li key={index}>{feature.text}</li>
                  ))}
                </ul>
               
              </div>
            </div>
            {/* End .col */}

            
          </div>
        </div>
        {/* /.container */}
      </div>
      <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">FOR INVESTORS</div>
                  <h2 className="main-title fw-500 tx-dark">
                  Simed Global is the perfect <br />investment partner.
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                Where other investment funds may shy away from early stage start ups in the medical 
                device sector, Simed Global seeks out and identifies opportunities before they are 
                sufficiently mature. Our added value lies in the development of our own technology, 
                quality of our scientific and research partners and our hands on approach in doing the 
                regulatory approvals, validation and qualification of the technologies in our own 
                laboratory positioning us to take the products to market as quickly as possible.
                </p>
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                Whether you are an early stage company/entrepeneur seeking to work with us, or an 
                investor seeking positive investment opportunities, Simed Global is your ideal partner 
                for early stage high growth investments in a lucrative expanding market.
                </p>
              </div>
              {/* /.block-style-seven */}
            </div>
            
          </div>
        </div>
        {/* /.container */}        
      </div>
      <div className="team-section-two position-relative pt-200 lg-pt-120">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">Our Team</h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* /.row */}
            <div className="row">
              <Team1 />
            </div>
            
            <div className="text-center md-mt-20">
              <Link
                href="/pages-menu/team-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                View full team
              </Link>
            </div>
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

export default FerritinTest;
