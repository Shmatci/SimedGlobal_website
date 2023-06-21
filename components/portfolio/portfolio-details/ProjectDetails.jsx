const ProjectDetails = ({ details }) => {
  if (!details || !details.projectInfo) {
    return null; // or a message indicating that there are no project details
  }

  return (
    <>
      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Product Features</div>   
        <div className="pt-text">{details.projectInfo.list}</div>

      </div>
      {/* End .col-12 */}

    </>
  );
};

export default ProjectDetails;
