import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Simon Maurer",
    role: "Founder",
    imgSrc: "/images/Simon.jpg",
  },
  {
    id: 2,
    name: "Paul Cray",
    role: "Commercial",
    imgSrc: "/images/Paul.jpg",
  },
  {
    id: 3,
    name: "Dr Patrick Druggan",
    role: "Director of Regulatory Affairs and Quality Management",
    imgSrc: "/images/Patrick.jpg",
  },
  {
    id: 4,
    name: "Michael Marks",
    role: "IVD Medical Devices, Authorized Representatives and Regulatory Affairs",
    imgSrc: "/images/Patrick.jpg",
  },
  {
    id: 5,
    name: "David Gould",
    role: "European Business Developement",
    imgSrc: "/images/Patrick.jpg",
  },
  {
    id: 6,
    name: "Ben Butterworth",
    role: "Director of Engineering Management",
    imgSrc: "/images/Ben.jpg",
  },
  {
    id: 7,
    name: "Tamara Vuksan",
    role: "Web Developer / Graphic Designer",
    imgSrc: "/images/tam.jpeg",
  },
  {
    id: 8,
    name: "Amy Kelly",
    role: "Business Development Executive",
    imgSrc: "/images/img_01.jpg",
  },
  {
    id: 9,
    name: "Mahantesh Patil",
    role: "Machine Learning Engineer",
    imgSrc: "/images/Mahantesh.jpg",
  },
];

const Team1 = () => {
  return (
    <>
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-delay={`${member.id * 100}`}
        >
          <div className="team-block-two mt-40">
            <div className="img-meta position-relative">
              <Image
                width={312}
                height={281}
                src={member.imgSrc}
                alt={member.name}
                className="lazy-img team-img w-100"
              />
              <div className="info text-center">
                <h5 className="tx-dark fs-20 mb-5">{member.name}</h5>
                <div className="tx-dark opacity-75">{member.role}</div>
              </div>
              {/* /.info */}
            </div>
            {/* /.img-meta */}
          </div>
          {/* /.team-block-two */}
        </div>
        /* End .col-3 */
      ))}
    </>
  );
};

export default Team1;
