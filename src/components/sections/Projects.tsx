import { OtherTech } from "../OtherTech";
import ProjectGrid from "../ProjectGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className=" font-poppins max-container padding-container   pt-12  "
    >
      <div className="flex justify-between   sm:items-center flex-col sm:flex-row  ">
        <div className="lg:pt-32 pt-4 max-w-3xl ">
          <h1 className="  sm:text-start text-center  py-3 text-2xl  md:text-4xl lg:text-6xl font-medium   text-transparent bg-gradient-to-r from-primary-200 via-primary-300 to-primary-500 bg-clip-text ">
            Latest Projects
          </h1>
          <p className="pt-4 lg:pt-6 pb-8 text-sm sm:text-base md:text-lg font-light text-primary-200/90 sm:text-start text-center  ">
            Here are some of my latest projects, visually appealing and
            user-friendly applications built with modern web technologies.
          </p>
        </div>

        <OtherTech />
      </div>
      <ProjectGrid />
    </section>
  );
}
