import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="section bg-light" id="projects">
      <div className="container">
        <h2 className="section-title mb-3">Projects</h2>

        <p className="section-subtitle mb-4">
          Real-world projects demonstrating my ability to design, build, and
          deploy modern web applications using the MERN stack.
        </p>

        <div className="row">
          {projects.map((project) => (
            <ProjectCard
              key={`${project.id}-${project.name}`}
              project={project}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="d-flex justify-content-center mt-5">
          <a
            href="https://github.com/venkatesh5650"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg px-5"
          >
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
