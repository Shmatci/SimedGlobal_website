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
      <p className="text-lg tx-dark opacity-75 mt-50 mb-30 lg-mb-20">
        - Taking your Product to Market
      </p>
      <p className="text-lg tx-dark opacity-75 mt-200 mb-30 lg-mb-20">
      You will always be able to rely on us as your partner guiding you through each step in <br />
      <span>“turning dreams into reality”</span>
      </p>
      </div>
  );
};

export default Banner;
