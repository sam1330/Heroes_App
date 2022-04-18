import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroesList = ({ publisher }) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="card-columns">
      <ul>
        {
          heroes.map(hero => (
            <HeroCard key={hero.id} hero={ hero }/>
          ))
        }
      </ul>
    </div>
  );
};

export default HeroesList;