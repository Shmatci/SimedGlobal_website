import Image from "next/image";

const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: "Someone from somewhere.",
    content:
      "Someone said that we are professional business ready for any action.",
  },
  {
    id: 2,
    icon: "/images/icon/icon_109.svg",
    title: "Something to say.",
    content:
      "Lorem ipsum",
  },
  {
    id: 3,
    icon: "/images/icon/icon_110.svg",
    title: "Something to say.",
    content:
      "Lorem ipsum.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <Image width={25} height={25} src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
