export default function Services() {
  return (
    <div className=" border flex flex-col  border-primary-600  rounded-xl lg:max-w-xl p-8 backdrop-blur-3xl">
      <div className="flex pb-4 items-center">
        <div className="text-3xl md:text-4xl text-primary mr-5">
          <svg
            stroke="#2A6FDA"
            fill="#2A6FDA"
            viewBox="0 0 640 512"
            height="45"
            width="45"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-center text-primary-50/90">
          What I can do
        </h1>
      </div>

      <p className="text-primary-200/95 font-light  pb-4">
        I can help develop solutions that will help you grow your business:
      </p>
      <ul className=" list-decimal space-y-2 pl-6 text-primary-50/90 font-medium">
        <li>● Full-Stack Web Development</li>
        <li>● Mobile App Development</li>
        <li>● Database Design </li>
        <li>● API Development & Integration</li>
      </ul>
    </div>
  );
}
