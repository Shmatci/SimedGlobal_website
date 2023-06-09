import Image from "next/image";

const TopTitle = () => {
  return (
    <div className="fancy-feature-fiftyOne position-relative mt-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-7" data-aos="fade-right">
            <div className="title-style-five mb-65 lg-mb-40">
              <div className="sc-title-two fst-italic position-relative">
                Simed Health
              </div>
              <h2 className="main-title fw-500 tx-dark">
                Self Health Tests
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}
      <Image
        src="/images/shape/shape_175.svg"
        alt="shap"
        className="lazy-img shapes shape-three"
        height={122}
        width={110}
      />
    </div>
  );
};

export default TopTitle;
