import Link from "next/link";
import Services from "../Services";
import Team from "../Team";

export default function Achievement() {
  return (
    <section className="font-poppins max-container padding-container pt-16 relative  ">
      <div className="lg:pt-32 pt-4 max-w-4xl cursor-default">
        <h1 className="  sm:text-start text-center  text-2xl  md:text-4xl lg:text-6xl font-medium   text-transparent bg-gradient-to-r from-primary-200 via-primary-300 to-primary-500 bg-clip-text ">
          Work Experience
        </h1>
        <p className="pt-4 lg:pt-6 pb-8 text-sm sm:text-base md:text-lg font-light text-primary-100/95 sm:text-start text-center  ">
          As a Full-Stack Developer at
          <span className="cursor-pointer mx-1.5 omed-gradient text-nowrap transition-all duration-200 underline underline-offset-2">
            <Link target="_blank" href={"https://omed.agency/"}>
              OMED Agency
            </Link>
          </span>
          , I collaborated with a talented team to create modern, user-friendly
          applications. My work included developing seamless backend systems and
          crafting responsive, visually appealing front-end interfaces.
        </p>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-2  gap-12 pt-12">
        <Services />
        <Team />
      </div>
    </section>
  );
}
