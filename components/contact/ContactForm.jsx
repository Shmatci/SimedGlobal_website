import { useRef } from "react";

const ContactForm = () => {
  const inputRef = useRef(null)
  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/handleSubmit', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    }); 
  
  };

  return (
    <div className="form-style-one" data-aos="fade-up">
      <form onSubmit={handleSubmit} action="mailto:tamara@simedglobal.com" method="post">
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <label htmlFor="name">Please enter your name:</label>
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                required="required"
                data-error="Name is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-50">
            <label htmlFor="email">Please enter your email:</label>

              <input
                type="email"
                placeholder="Email Address*"
                name="email"
                ref={inputRef}
                required="required"
                data-error="Valid email is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Your message*"
                name="message"
                required="required"
                data-error="Please,leave us a message."
                defaultValue={""}
              />
              <div className="help-block with-errors" />
            </div>
          </div>
          {/* End .col-12 */}

          <div className="col-12">
            <button className="btn-twentyTwo fw-500 tran3s d-block" type="submit">
              Send Message
            </button>
          </div>
          {/* End .col-12 */}
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default ContactForm;
