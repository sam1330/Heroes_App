import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import { heroes } from "../../data/heroes";

const HeroScreen = () => {
  const { heroId } = useParams();
  const [hero, setHero] = useState({});

  useEffect(() => {
    setHero(() => heroes.find((hero) => hero.id === heroId));
  }, []);

  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <div className="card mt-3 bg-dark text-white">
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-sm-4">
            <img
              src={`/assets/${hero.id}.jpg`}
              alt={hero.superhero}
              className="img-thumbnail"
            />
          </div>
          <div className="col-12 col-sm-8">
            <h3>{hero.superhero}</h3>
            <p>Alter ego: {hero.alter_ego}</p>
            <p>First appearance: {hero.first_appearance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
