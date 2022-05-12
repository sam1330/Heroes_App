import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ hero }) => { 

  return (
    <div className="card  bg-dark text-white">
      <img
        src={`/assets/${hero.id}.jpg`}
        className="card-img-top"
        alt={hero.superhero}
        height="300"
      />
      <div className="card-body">
        <h5 className="card-title text-center">{hero.superhero}</h5>
        <p>
          <span className="d-block">Alter ego: {hero.alter_ego}</span>
          <span className="d-block">
            First appearance: {hero.first_appearance}
          </span>
          <Link className="d-block" to={`/hero/${hero.id}`}>
            More...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HeroCard;