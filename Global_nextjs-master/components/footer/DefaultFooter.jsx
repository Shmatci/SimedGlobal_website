import Link from "next/link";
import Footer2 from "./Footer2";
import NewsLetter from "./NewsLetter";
import CopyrightFooter2 from "./CopyrightFooter2";
import Image from "next/image";

const DefaultFooter = () => {
  return (
    <div className="footer-style-eleven theme-basic-footer position-relative">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-2 footer-intro mb-40">
              <div className="logo">
                <Link href="/">
                  <Image src="/images/logo/main_logo.png" alt="brand" 
                width={160}
                height={70}/>
                </Link>
              </div>
            </div>
            {/* End .col */}

            <Footer2 />

            <div className="col-xl-4 col-lg-5 mb-30 form-widget">
              <h5 className="footer-title tx-dark fw-normal">Newsletter</h5>
              <h6 className="pt-15 pb-20 md-pt-10">Join our newsletter</h6>
              <NewsLetter />
              <div className="fs-14 mt-10">
                We only send interesting and relevant emails.
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter2 />
    </div>
  );
};

export default DefaultFooter;
