import { columns } from "@/helpers/projectsData";
import ProjectCard from "./Project";

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
      {columns.map((column, colIndex) => (
        <ul key={colIndex} className="grid gap-4">
          {column.map((project, index) => (
            <ProjectCard
              index={index}
              summary={project.summary}
              key={project.projectName}
              projectName={project.projectName}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </ul>
      ))}
    </div>
  );
}
