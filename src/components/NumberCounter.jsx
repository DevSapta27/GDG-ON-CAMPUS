import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="bg-orange-400 text-white py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={50}
              separator=","
              suffix="+"
              duration={2}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Members</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={25}
              separator=","
              suffix="+"
              duration={2}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Tech Workshops</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={100}
               separator=","
              suffix="+"
              duration={2}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Resources and Oppurtunities</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={3}
              separator=","
              suffix="+"
              duration={2}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Chapter</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
