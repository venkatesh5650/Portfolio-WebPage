function Education() {
  return (
    <section className="section bg-light" id="education">
      <div className="container">
        <h2 className="section-title mb-3">Education</h2>
        <p className="section-subtitle mb-4">
          Academic foundation supporting my software development career.
        </p>

        <div className="card shadow-sm education-card">
          <div className="card-body">
            <h5 className="card-title">
              Bachelor of Commerce (Computer Applications)
            </h5>

            <p className="text-muted mb-2">
              Government City College, Nayapul — Hyderabad
            </p>

            <p className="mb-2">
              <strong>Duration:</strong> 2021 – 2024
            </p>

            <p className="mb-2">
              <strong>Focus Areas:</strong> Computer Applications, Programming
              Fundamentals, Web Technologies, Databases
            </p>

            <p className="mb-0">
              Alongside commerce fundamentals, this program provided exposure to
              computer applications and programming concepts, which motivated me
              to pursue a career in full-stack web development through practical
              projects and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
