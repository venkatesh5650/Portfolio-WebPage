function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* LEFT TEXT */}
          <div className="col-lg-7">
            <p className="hero-intro mb-2">Hi, I&apos;m</p>

            <h1 className="hero-title mb-2">
              Venkatesh <span className="hero-highlight">Karthan</span>
            </h1>

            <h2 className="hero-subtitle mb-3">
              MERN Stack Web Developer
            </h2>

            <p className="hero-text mb-4">
              I build clean, scalable, and user-focused web applications using
              modern JavaScript technologies. With hands-on experience in
              React, Node.js, Express, and SQL databases, I focus on writing
              maintainable code and building solutions that solve real-world
              problems.
            </p>

            {/* CTA BUTTONS */}
            <div className="d-flex gap-3 flex-wrap">
              <a href="#projects" className="btn btn-light btn-lg hero-btn">
                View Projects
              </a>

              <a
                href="Venkatesh_Backend_Focused_Full_Stack_Developer.pdf"
                className="btn btn-outline-light btn-lg hero-btn-outline"
                download
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="btn btn-outline-light btn-lg hero-btn-outline"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="hero-card">
              <p className="label mb-1">Location</p>
              <h5 className="mb-3">Hyderabad, India (Remote)</h5>

              <p className="label mb-1">Current Focus</p>
              <p className="mb-3">
                Building{" "}
                <span className="hero-highlight">
                  Full-Stack MERN Applications
                </span>{" "}
                with clean architecture and best practices.
              </p>

              <p className="label mb-1">Availability</p>
              <p className="mb-0 fw-semibold">
                Open to Remote Junior / Entry-Level Roles
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
