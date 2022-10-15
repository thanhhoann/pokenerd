import "./App.css";
import { Pokedex } from "pokeapi-js-wrapper";
import { Image, Input } from "@chakra-ui/react";
import React from "react";

function App() {
  const [pokeName, setPokeName] = React.useState("");
  const [pokeSprite, setPokeSprite] = React.useState("");

  const pokedex = new Pokedex();

  pokedex.getPokemonByName(pokeName)?.then(function (res) {
    console.log(res);
    setPokeSprite(res.sprites.back_default);
  });

  return (
    <>
      <Input value={pokeName} onChange={(e) => setPokeName(e.target.value)} />
      {pokeSprite && <Image src={pokeSprite} />}
    </>
  );
}

export default App;
