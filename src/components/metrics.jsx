import React, { useEffect, useState } from "react";

const Metrics = () => {
  const [hackers, setHackers] = useState(0);
  const [projects, setProjects] = useState(0);
  const [bounties, setBounties] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, end) => {
      let count = 0;
      const increment = Math.ceil(end / 100);
      const interval = setInterval(() => {
        if (count < end) {
          count += increment;
          if (count > end) count = end;
          setter(count);
        } else {
          clearInterval(interval);
        }
      }, 20);
    };

    animateCounter(setHackers, 205);
    animateCounter(setProjects, 64);
    animateCounter(setBounties, 29000);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-around items-center color-moldy text-white p-4 sm:p-6 my-10 sm:my-20 sm:p-8 mt-10 text-center rounded-3xl my-10 gap-6 sm:gap-0">
      <div className="flex-1">
        <h2 className="text-3xl font-bold">{hackers}</h2>
        <p className="text-lg font-semibold font-Herokid">Hackers</p>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold">{projects}</h2>
        <p className="text-lg font-semibold font-Herokid">Projects</p>
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold">${bounties.toLocaleString()}</h2>
        <p className="text-lg font-semibold font-Herokid">Bounties</p> 
      </div>
    </div>
  );
};

export default Metrics;
