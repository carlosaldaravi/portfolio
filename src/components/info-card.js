import Avatar from "./avatar";
import Link from "next/link";
import AvatarSwitch from "./avatar-switch";

const InfoCard = () => {
  const people = [
    {
      name: "Fullstack Developer",
      role: "Fullstack Developer",
      to: "/developer",
      // avatar: <Avatar src="/yo-dev.png" alt="avatar" />,
      avatar: <AvatarSwitch src="/yo-dev.png" alt="avatar" />,
      rrss: [
        {
          name: "Twitter",
          svg: (
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          ),
          url: "https://twitter.com/carlosaldaravi",
        },
        {
          name: "LinkedIn",
          svg: (
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                clipRule="evenodd"
              />
            </svg>
          ),
          url: "https://www.linkedin.com/in/carlos-aldaravi/",
        },
      ],
    },
    {
      name: "Kitesurfer",
      role: "Kitesurfer",
      to: "/kitesurf",
      // avatar: <Avatar src="/yo-kite.png" alt="avatar" />,
      avatar: <AvatarSwitch src="/yo-kite.png" alt="avatar" />,
      rrss: [
        {
          name: "Instagram",
          svg: (
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 122.9 122.9"
            >
              <path d="M61.5 0A435 435 0 0 0 36 .4a45 45 0 0 0-14.9 2.8 29.9 29.9 0 0 0-10.9 7.1 30.3 30.3 0 0 0-7 10.9 45 45 0 0 0-3 15C.2 42.6 0 44.6 0 61.3s0 18.8.4 25.4a45 45 0 0 0 2.8 14.9 30.1 30.1 0 0 0 7.1 10.9 30.1 30.1 0 0 0 10.9 7 45.2 45.2 0 0 0 15 3c6.5.2 8.5.3 25.2.3s18.8 0 25.4-.4a45.2 45.2 0 0 0 14.9-2.8 31.5 31.5 0 0 0 18-18 45.6 45.6 0 0 0 2.8-15c.3-6.5.4-8.6.4-25.3s0-18.8-.4-25.3a45.7 45.7 0 0 0-2.8-15 30.1 30.1 0 0 0-7.1-10.8 29.8 29.8 0 0 0-10.9-7 45.1 45.1 0 0 0-15-3C80.3.2 78.2 0 61.5 0Zm-5.6 11h5.6c16.4 0 18.3.1 24.8.4a34 34 0 0 1 11.4 2.1 19 19 0 0 1 7 4.6 19.2 19.2 0 0 1 4.6 7.1 34 34 0 0 1 2.2 11.4c.3 6.5.3 8.4.3 24.8s0 18.4-.3 24.9a33.9 33.9 0 0 1-2.2 11.4 20.4 20.4 0 0 1-11.6 11.6 33.6 33.6 0 0 1-11.4 2.1c-6.5.3-8.4.4-24.8.4s-18.4 0-24.9-.4a34 34 0 0 1-11.4-2.1 19 19 0 0 1-7-4.6 19 19 0 0 1-4.6-7 34 34 0 0 1-2.2-11.5c-.3-6.4-.3-8.4-.3-24.8s0-18.3.3-24.8a33.7 33.7 0 0 1 2.2-11.4 19 19 0 0 1 4.5-7 19.1 19.1 0 0 1 7.1-4.7 34.2 34.2 0 0 1 11.4-2.1c5.7-.3 7.9-.3 19.3-.3Zm38.3 10.3a7.4 7.4 0 1 0 7.4 7.3 7.4 7.4 0 0 0-7.4-7.3Zm-32.8 8.6A31.6 31.6 0 1 0 93 61.4 31.6 31.6 0 0 0 61.5 30Zm0 11A20.5 20.5 0 1 1 41 61.5 20.5 20.5 0 0 1 61.5 41Z" />
            </svg>
          ),
          url: "https://www.instagram.com/carlosaldaravi/?hl=es",
        },
        {
          name: "Tiktok",
          svg: (
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 2859 3333"
            >
              <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z" />
            </svg>
          ),
          url: "https://www.tiktok.com/@carlosaldaravi",
        },
      ],
    },
  ];

  const rrssHandle = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank", "noreferrer");
  };
  // hover:scale-110 transform transition-transform duration-500 ease-in-out

  return (
    <ul
      role="list"
      className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-8"
    >
      {people.map((person) => (
        <Link href={person.to} key={person.role}>
          <li className="rounded-2xl bg-gray-800 px-8 py-10">
            <div className="">
              <div className="flex justify-center">
              {person.avatar}
              </div>
            </div>
            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
              {person.name}
            </h3>
            {/* <p className="text-sm leading-6 text-gray-400">{person.role}</p> */}
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              {person.rrss.map((rs) => (
                <li key={rs.name} onClick={(e) => rrssHandle(e, rs.url)}>
                  <span className="sr-only">{rs.name}</span>
                  {rs.svg}
                </li>
              ))}
            </ul>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default InfoCard;
