function About() {
  return (
    <section className="section bg-light" id="about-inner">
      <div className="container">
        <h2 className="section-title mb-3">About Me</h2>

        <p className="section-subtitle mb-4">
          MERN Stack Developer building scalable, user-focused web applications.
        </p>

        {/* Highlight Line */}
        <p className="fw-semibold text-primary mb-3">
          Open to Remote Junior / Entry-Level Web Developer roles
        </p>

        {/* Strong Intro */}
        <p>
          I am a MERN Stack Developer focused on building clean, scalable, and
          user-friendly web applications. I enjoy transforming ideas into
          production-ready solutions using modern JavaScript frameworks and
          backend technologies.
        </p>

        {/* Technical Depth */}
        <p>
          I have hands-on experience working with React, Node.js, Express, and SQL
          databases, along with a strong understanding of REST APIs, authentication
          flows, and component-based architecture. I follow best practices to write
          clean, readable, and maintainable code aligned with industry standards.
        </p>

        {/* Learning Line (SAFE MongoDB mention) */}
        <p className="text-muted">
          Currently exploring MongoDB and NoSQL data modeling concepts to expand
          backend database expertise.
        </p>

        {/* Soft Skills + Remote Fit */}
        <p>
          Alongside development, I have experience collaborating with learners and
          teams as a Teaching Assistant, which strengthened my communication,
          problem-solving, and remote collaboration skills. I am comfortable
          learning independently, taking ownership of tasks, and contributing
          effectively in distributed teams.
        </p>

        {/* Bullet Strengths */}
        <ul className="mt-3">
          <li>Strong foundation in MERN Stack development</li>
          <li>Experience with REST APIs and authentication workflows</li>
          <li>Comfortable working in remote, collaborative environments</li>
          <li>Focused on clean code, performance, and usability</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
