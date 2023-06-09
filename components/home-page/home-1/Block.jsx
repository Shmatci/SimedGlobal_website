import Image from "next/image";

const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <Image
            src="/images/shape/shape_136.svg"
            alt="shape"
            className="lazy-img d-none d-sm-inline-block"
            width={100}
            height={100}
          />
        </div>
        <div className="col-md-7 col-sm-8 wow fadeInDown">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#00869d" }}>Something</h3>
            <p>Something to say &amp; about our company</p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7 wow fadeInDown">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#00869d" }}>
              1st <br />
              <span>in the UK</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, iusto non quos qui reiciendis ab quas rerum modi quis nemo deleniti cupiditate, aut illo unde perferendis illum dolorum voluptate deserunt. 
              
            </p>
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5 wow fadeInUp">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#00869d" }}>
              <span>Again</span>
            </h3>
            <p>Say something.</p>
          </div>
          {/* /.block-wrapper */}
          <Image
            src="/images/shape/shape_137.svg"
            alt="shape"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Block;
