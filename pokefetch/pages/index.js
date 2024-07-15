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
        PokeFetch!
      </h1>
      <div className="grid grid-cols-3 bg-red-600 text-blue-500 text-center gap-3 p-4 text-xl font-semibold">
      <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
        <Link href="/gen1">Generation 1</Link>
      </button>
      <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
        <Link href="/gen2">Generation 2</Link>
      </button>
      <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
        <Link href="/gen3">Generation 3</Link>
      </button>
      <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
        <Link href="/gen4">Generation 4</Link>
      </button>
      <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
        <Link href="/gen5">Generation 5</Link>
      </button>
      <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
        <Link href="/gen6">Generation 6</Link>
      </button>
      <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
        <Link href="/gen7">Generation 7</Link>
      </button>
      <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
        <Link href="/gen8">Generation 8</Link>
      </button>
      <button className="bg-yellow-300 p-4 rounded-full hover:text-blue-700">
        <Link href="/gen9">Generation 9</Link>
      </button>
      </div>
    </div>
  );
};

export default HomePage;
