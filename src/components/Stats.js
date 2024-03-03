import React from "react";
import { stats } from "../data";
const Stats = () => {
  return (
    <div className="bg-accent rounded-[20px] p-12">
      <div className="flex flex-wrap gap-y-8">
        {stats.map((stat, index) => {
          return (
            <div
              className="min-h-[70px] w-3/6 flex flex-col justify-center even:border-l lg:flex-1 lg:even:border-l lg:odd:border-l lg:first:border-none "
              key={index}
            >
              <div className="text-2xl font-semibold lg:text-4xl">
                {" "}
                {stat.value}{" "}
              </div>
              <div className="text-base font-light max-w-[110px] mx-auto lg:text-xl">
                {stat.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
