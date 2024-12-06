import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Ahmed Naoum",
    job: "FullStack Developer",
    image: "/testimonials/ahmedNaoum.jpg",
    profileUrl: "https://www.linkedin.com/in/ahmedsweng/",
  },
  {
    id: 2,
    name: "Omar Chabira",
    job: "FullStack Developer",
    image: "/testimonials/omarChabira.jpg",
    profileUrl: "https://www.linkedin.com/in/omar-chabira-6a83552a4/",
  },
  {
    id: 3,
    name: "Islam Guedouar",
    job: "Frontend Developer",
    image: "/testimonials/islam.jpeg",
    profileUrl: "https://linkedin.com/in/guedouar-islam-b30173335",
  },
  {
    id: 4,
    name: "Muhammed Abbou",
    job: "Backend Engineer",
    image: "/testimonials/muhammedAbbou.jpg",
    profileUrl: "https://www.linkedin.com/in/mohammed-abbou/",
  },
];

export default function Team() {
  return (
    <div className="w-full bg-primary-950 border border-primary-600 rounded-xl shadow-md overflow-hidden flex flex-col">
      {teamMembers.map((member, index) => (
        <Link
          key={member.name}
          target="_blank"
          href={member.profileUrl || "#"}
          className="hover:bg-primary-800 transition-colors duration-200 flex-grow"
        >
          <div className="flex items-center p-4">
            <Image
              src={member.image}
              alt={member.name}
              width={50}
              height={50}
              className="rounded-full"
            />{" "}
            <div className="ml-4 flex-grow">
              <p className="text-base font-medium text-primary-100/95">
                {member.name}
              </p>
              <p className="text-sm text-primary-200/95">{member.job}</p>
            </div>
            <svg
              className="h-5 w-5 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          {index < teamMembers.length - 1 && (
            <div className="h-px bg-primary-700 mx-4" />
          )}
        </Link>
      ))}
    </div>
  );
}
