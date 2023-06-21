import products from "../../../data/spec";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProjectSlide from "./ProjectSlide";

const ProductSpec = () => {
  const router = useRouter();
  const [prodSpec, setProdSpec] = useState();
  const id = router.query.id;

  useEffect(() => {
    if (!id) <h1>Loading...</h1>;
    else setProdSpec(products.find((item) => item.id == id));

    return () => {};
  }, [id]);

  return (
    <div className="portfolio-details-two pt-20 pb-50 lg-pb-10 md-pt-10">
      <div className="project-desctiption">
        <div className="container">
            <div className="col-lg-12 rounded-3">
              <ProjectSlide slide={prodSpec} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpec;
