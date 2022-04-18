import React from "react";

const HeroCard = ({ hero }) => { 

  return (
    <div className="card">
      <img
        src={`/assets/${hero.id}.jpg`}
        className="card-img-top"
        alt={hero.superhero}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{hero.superhero}</h5>
        <p>
          <span className="d-block">Alter ego: {hero.alter_ego}</span>
          <span className="d-block">
            First appearance: {hero.first_appearance}
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroCard;