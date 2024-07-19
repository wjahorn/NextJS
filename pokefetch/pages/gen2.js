import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=-1');
  const data = await res.json();

  return {
    props: { pokemon: data.results },
  };
};

const HomePage = ({ pokemon }) => {
  const [clickedPokemonData, setClickedPokemonData] = useState(null);
  const handleClick = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setClickedPokemonData(data);
    }

  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-yellow-300 text-red-600 text-lg font-bold italic text-center py-4">
        PokéFetch! Generation 2
      </h1>
      <div className="bg-red-600 text-blue-500 text-center space-x-60 p-8 text-xl font-semibold">
        <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
            <Link href="/gen1">Generation 1</Link>
        </button>
        <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
            <Link href="/">Back to Homepage</Link>
        </button>
        <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
            <Link href="/gen3">Generation 3</Link>
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 capitalize">
        {pokemon.slice(151, 251).map((mon) => (
          <li
            key={mon.name}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <a
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
            onClick={() => handleClick(mon.url)}
          >
            <h3 className="text-xl font-semibold">{mon.name}</h3>
          </a>
          {clickedPokemonData && clickedPokemonData.name === mon.name && (
            <div className="mt-2 p-2 rounded-lg">
              <Image 
              src={clickedPokemonData.sprites.front_default} 
              width={192} 
              height={192}
              className="mx-auto">
              </Image>
              {clickedPokemonData.types.map((typeinfo) => (
                <li
                  key={typeinfo.type.name}
                >
                  <p>Type: {typeinfo.type.name}</p>
                </li>
              ))}
              {clickedPokemonData.stats.map((statinfo) => (
                <li
                  key={statinfo.stat.name}
                >
                  <p>{statinfo.stat.name}: {statinfo.base_stat}</p>
                </li>
              ))}
              <p>Height: {clickedPokemonData.height}</p>
              <p>Weight: {clickedPokemonData.weight}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);
};

export default HomePage;
