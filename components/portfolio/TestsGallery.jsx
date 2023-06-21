import { useState } from "react";
import items from "../../data/tests";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery"
import "photoswipe/dist/photoswipe.css"
import Image from "next/image";

const TestsGallery = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(0, 12)
      : items.slice(0, 12).filter((item) => item.category.includes(filter));

  return (
    <div className="portfolio-gallery-five pt-30">
      <div className="container">
        <div className="row pt-90 lg-pt-50 ">
          <Gallery>
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`col-lg-4 col-md-6 ${item.category}`}
              >
                <div className="portfolio-block-five hvr-shutter-out mb-50 lg-mb-30">
                  <div className="img-meta position-relative">
                    <a href={`/ttt/${item.name}`}>
                      <Image
                        width={410}
                        height={380}
                        src={item.image}
                        alt="gallery"
                        className="w-100 tran5s"
                      />
                    </a>

                    <div className="caption d-flex justify-content-center align-items-center flex-column">
                      <span className="tag">{item.tag}</span>
                      <h6>
                        <Link 
                          href={`/ttt/${item.id}`} 
                          className="pj-title">
                          {item.name}
                        </Link>
                      </h6>
                    </div>
                    {/* <!-- /.caption --> */}
                  </div>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default TestsGallery;
