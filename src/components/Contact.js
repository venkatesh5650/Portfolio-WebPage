import { useState } from "react";

function Contact() {
  const email = "karthanvenkateshvenkatesh@gmail.com";
  const github = "https://github.com/venkatesh5650";
  const linkedin = "https://www.linkedin.com/in/karthan-venkatesh/";
  const phone = "+91 93923 72089";

  const [showMessage, setShowMessage] = useState(false);

  const handleEmailClick = () => {
    // Copy email to clipboard
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email).catch(() => {});
    }

    // Open mail client
    window.location.href = `mailto:${email}?subject=Web%20Developer%20Opportunity&body=Hi%20Venkatesh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A`;

    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title mb-3">Contact</h2>
        <p className="section-subtitle mb-4">
          Let’s discuss opportunities, collaborations, or any questions you may
          have.
        </p>

        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-md-6 mb-4">
            <h5 className="mb-3">Get in Touch</h5>

            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} className="contact-link">
                {email}
              </a>
            </p>

            <p className="mb-1">
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="contact-link"
              >
                {phone}
              </a>
            </p>

            <p className="mb-1">
              <strong>GitHub:</strong>{" "}
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                {github}
              </a>
            </p>

            <p className="mb-1">
              <strong>LinkedIn:</strong>{" "}
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                {linkedin}
              </a>
            </p>

            <p className="mb-0">
              <strong>Location:</strong> Hyderabad, India (Open to Remote)
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6">
            <h5 className="mb-3">Quick Contact</h5>

            <p className="text-muted">
              Prefer a quick connection? Use the options below to reach me
              instantly.
            </p>

            <button
              onClick={handleEmailClick}
              className="btn btn-primary me-2 mb-2"
            >
              Send Email
            </button>

            <a
              href="https://wa.me/919392372089"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success mb-2"
            >
              WhatsApp Me
            </a>

            {showMessage && (
              <div className="email-toast mt-3">
                ✅ Email copied to clipboard. You can paste it into Gmail or any
                email client if needed.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
