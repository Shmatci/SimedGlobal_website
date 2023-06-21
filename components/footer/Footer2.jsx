const columns = [
  {
    title: "Links",
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      { label: "3T's", url: "/ttt" },
      { label: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Tomorrow's Technology Today",
    links: [
      { label: "POC Blood Tests", url: "/ttt/poc" },
      { label: "EarWell", url: "https://www.earwellclinics.com" },
      { label: "Self Health Tests", url: "/ttt/selfHealthTests" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
