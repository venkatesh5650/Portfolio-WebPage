import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title mb-3">Skills</h2>
        <p className="section-subtitle mb-4">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="d-flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="badge rounded-pill skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
