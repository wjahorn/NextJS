import React from 'react';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=-1');
  const data = await res.json();

  return {
    props: { pokemon: data.results },
  };
};

const HomePage = ({ pokemon }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-yellow-300 text-red-600 text-lg font-bold italic text-center py-4">
        PokéFetch! Generation 5
      </h1>
      <div className="bg-red-600 text-blue-500 text-center space-x-60 p-8 text-xl font-semibold">
        <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
            <Link href="/gen4">Generation 4</Link>
        </button>
        <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
            <Link href="/">Back to Homepage</Link>
        </button>
        <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
            <Link href="/gen6">Generation 6</Link>
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 capitalize">
        {pokemon.slice(493, 649).map((mon) => (
          <li
            key={mon.name}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <a className="text-blue-500 hover:text-blue-700">
              <h3 className="text-xl font-semibold">{mon.name}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
