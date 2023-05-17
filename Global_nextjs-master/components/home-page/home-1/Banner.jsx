const Banner = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <li key={i}>
        <i className="fa-solid fa-star" />
      </li>
    );
  }

  return (
    <div className="top-banner text-center">
      <h2 className="tx-dark mb-20">Professional, transparent, interactive, direct, passionate and dedicated partners</h2>
      <p className="text-lg tx-dark opacity-75 mb-30 lg-mb-20">
        - Taking your Product to Market
      </p>
      </div>
  );
};

export default Banner;
