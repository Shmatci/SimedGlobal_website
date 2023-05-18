import { useState } from "react";
import items from "../../data/tests";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const TestsGallery = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(0, 8)
      : items.slice(0, 8).filter((item) => item.category.includes(filter));

  return (
    <div className="portfolio-gallery-three pt-30">
      <div className="container">
        
        <div className="row pt-90 lg-pt-50">
          <Gallery>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-4 ${item.category}`}
              >
                <div className="portfolio-block-three position-relative mb-110 lg-mb-90">
                  <div className="img-meta">
                    <Image
                      width={350}
                      height={500}
                      src={item.image}
                      alt="gallary"
                      className="w-100"
                    />
                  </div>
                  <div className="meta-data tran3s d-flex align-items-center justify-content-between">
                    <Link
                      href={`/portfolio/${item.id}`}
                      className="title tran3s d-flex flex-column"
                    >
                      <span className="pj-name tran3s fw-500">{item.name}</span>
                      <span className="tag">{item.tag}</span>
                    </Link>

                    <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={630}
                      height={500}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          title="Click for large view"
                          className="fancybox expend-btn font-recoleta tran3s"
                          ref={ref}
                          onClick={open}
                        >
                          +
                        </span>
                      )}
                    </Item>
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