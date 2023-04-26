import { EyeDropperIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import classes from "./kitesurf.module.css";
import Avatar from "../../components/avatar";
import { useRouter } from 'next/router';

const events = [
  {
    image: "https://source.unsplash.com/random/200x200?sig=1",
    title: "Evento 0",
    date: "22 Marzo 2023",
    description: "Descripción del evento 1",
  },
  {
    image: "https://source.unsplash.com/random/200x200?sig=2",
    title: "Evento 1",
    date: "23 Marzo 2023",
    description: "Descripción del evento 2",
  },
  {
    image: "https://source.unsplash.com/random/200x200?sig=1",
    title: "Evento 2",
    date: "22 Marzo 2023",
    description: "Descripción del evento 1",
  },
  {
    image: "https://source.unsplash.com/random/200x200?sig=2",
    title: "Evento 3",
    date: "23 Marzo 2023",
    description: "Descripción del evento 2",
  },
  {
    image: "https://source.unsplash.com/random/200x200?sig=1",
    title: "Evento 4",
    date: "22 Marzo 2023",
    description: "Descripción del evento 1",
  },
  {
    image: "https://source.unsplash.com/random/200x200?sig=2",
    title: "Evento 5",
    date: "23 Marzo 2023",
    description: "Descripción del evento 2",
  },
  {
    image: "https://source.unsplash.com/random/200x200?sig=1",
    title: "Evento 6",
    date: "22 Marzo 2023",
    description: "Descripción del evento 1",
  },
  {
    image: "https://source.unsplash.com/random/200x200?sig=2",
    title: "Evento 7",
    date: "23 Marzo 2023",
    description: "Descripción del evento 2",
  },
  {
    image: "https://source.unsplash.com/random/200x200?sig=1",
    title: "Evento 8",
    date: "22 Marzo 2023",
    description: "Descripción del evento 1",
  },
  {
    image: "https://source.unsplash.com/random/200x200?sig=2",
    title: "Evento 9",
    date: "23 Marzo 2023",
    description: "Descripción del evento 2",
  },
];

const Timeline = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/maintenance');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Avatar src="/yo-kite.JPG" alt="avatar" />

        <div className={`${classes.webkitAvailable} bg-black text-white min-h-screen flex items-center`}>
          <div className="container mx-auto">
            <div className="relative">
              <div className="absolute h-full w-0.5 bg-gray-300 ml-20 sm:ml-0 sm:left-1/2 transform -translate-x-1/2" />
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`relative mt-8 flex hover:scale-110 hover:ml-5 ${
                    index % 2 !== 0
                      ? "sm:justify-end sm:ml-16 sm:hover:-mr-2 hover:-mr-12"
                      : "justify-start sm:text-right sm:mr-16 sm:hover:-ml-2"
                  }`}
                >
                  <div
                    className={`sm:w-1/2 p-4 ${classes.webkit} ${
                      index % 2 !== 0 ? "sm:pr-8" : "sm:pl-8"
                    } `}
                  >
                    <div className="relative">
                      {/* <Image
                    src={event.image}
                    width={50}
                    height={50}
                    alt={event.title}
                    className={`rounded h-auto absolute top-0 transform ${
                      index % 2 === 0 ? '-translate-x-1/3' : 'translate-x-1/3'
                    }`}
                  /> */}
                      <div
                        className={`absolute w-16 h-16 bg-gray-100 rounded-full ring-8 ring-black ${
                          index % 2 === 0
                            ? "sm:right-0 -mr-12 transform translate-x-1/2"
                            : "sm:left-0 ml-8 sm:-ml-12 transform sm:-translate-x-1/2"
                        }`}
                      >
                        {" "}
                        <EyeDropperIcon className="w-8 h-8 text-black left-1/2" />{" "}
                      </div>
                    </div>
                    <div
                      className={`rounded-lg ml-32 sm:ml-0 gap-2 bg-gray-300 text-red-500 transform transition-transform duration-500 ease-in-out`}
                    >
                      <div
                        className={`p-4 rounded-t-lg bg-white ${
                          index % 2 !== 0
                            ? classes["arrow-left"]
                            : classes["arrow-right"]
                        }`}
                      >
                        <h3 className="font-bold text-xl">{event.title}</h3>
                      </div>
                      <div className="p-4">
                        <p className="text-sm">{event.date}</p>
                        <p className="">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
