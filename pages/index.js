import styles from "@/styles/Home.module.css";
import Image from "next/image";
import pokeball from "../public/images/pokeball.png";
import Card from "../components/Card";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "http://pokeapi.co/api/v2/pokemon/";

  try {
    const res = await fetch(`${api}/?limit=${maxPokemons}`);
    const data = await res.json();

    //add pokemon index
    data.results.forEach((item, index) => {
      item.id = index + 1;
    });
    return {
      props: {
        pokemons: data.results,
      },
    };
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    return {
      props: {
        pokemons: [],
      },
    };
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image src={pokeball} alt="pokeball" />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
