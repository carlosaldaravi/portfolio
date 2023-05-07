import Image from "next/image";
import { useState } from "react";

const AnimatedBox = ({ skills }) => {
  const numOfSkills = skills.length;
  const [actualShownSkill, setActualShownSkill] = useState(0);

  return (
    <div className="parent mt-24">
      {/* {skills.map((skill, index) => {
        return (
          index <= actualShownSkill && (
            <div key={skill}>
              <svg className="goo-filter" viewBox="0 0 1 1">
                <filter className="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -20"
                    result="goo"
                  />
                  <feBlend in="SourceGraphic" in2="goo" />
                </filter>
              </svg>

              <div className="animated-box">
                <input type="checkbox" className="toggle" name="toggle" />

                <div className="background">
                  <div className="bg-content">
                    <div className="drip"></div>
                    <div className="drip"></div>
                    <div className="drip"></div>
                  </div>
                  <div className="bg-description">
                    <div className="drip"></div>
                    <div className="drip"></div>
                    <div className="drip"></div>
                  </div>
                </div>

                <div className="content">
                  <div className="avatar">
                    <Image
                      src="/cometa.png"
                      alt="maintenance"
                      width={1920}
                      height={937}
                      className="w-screen h-auto"
                    />
                  </div>
                  <header>{skill}</header>
                  <p className="pronunciation">🔈 Evo Dlab</p>
                  <label className="button" htmlFor="toggle"></label>
                </div>
                <div className="description">
                  {actualShownSkill + 1 < skills.length && (
                    <div className="content">
                      <div className="avatar">
                        <Image
                          src="/cometa.png"
                          alt="maintenance"
                          width={1920}
                          height={937}
                          className="w-screen h-auto"
                        />
                      </div>
                      <header>{skill[actualShownSkill + 1]}</header>
                      <p className="pronunciation">🔈 Evo Dlab</p>
                      <label className="button" htmlFor="toggle"></label>
                    </div>
                  )}
                  {actualShownSkill + 1 >= skills.length && (
                    <>
                      <header>{skills[actualShownSkill + 1]}</header>
                      <p className="">We literally did it.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        );
      })} */}
      <div className="animated-box">
        <input type="checkbox" className="toggle" name="toggle" />

        <div className="background">
          <div className="bg-content">
            <div className="drip"></div>
            <div className="drip"></div>
            <div className="drip"></div>
          </div>
          <div className="bg-description">
            <div className="drip"></div>
            <div className="drip"></div>
            <div className="drip"></div>
          </div>
        </div>

        <div className="content">
          <div className="avatar">
            <Image
              src="/cometa.png"
              alt="maintenance"
              width={1920}
              height={937}
              className="w-screen h-auto"
            />
          </div>
          <header>Una cometa</header>
          <p className="pronunciation">🔈 Evo Dlab</p>
          <label className="button" htmlFor="toggle"></label>
        </div>
        <div className="description">
          <header>A kite!</header>
          <p className="">We literally did it.</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBox;
