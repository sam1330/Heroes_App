import React from "react"
import HeroesList from "../hero/HeroesList";

const MarvelScreen = () => {


  return (
    <>
      <h1>Marvel Screen</h1>
      <HeroesList publisher={"Marvel Comics"} />
    </>
  );
}

export default MarvelScreen;