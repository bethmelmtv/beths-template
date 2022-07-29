// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer'; //what does this do?
import styles from './PokemonList.css';

export default function PokemonList({ pokedex }) {
  // const { ref, inView } = useInView();
  console.log(pokedex, 'POKEDEX');
  // useEffect(() => {
  //   if (!inView) return;
  //   onLoadNext();
  // }, [inView]);

  return (
    <ul className={styles.PokemonList}>
      {pokedex.map((pokemon) => (
        <Card
          key={pokemon._id}
          pokemon={pokemon}
          // loadRef={i === pokedex.length - 3 ? ref : null}
        />
      ))}
    </ul>
  );
}

function Card({ pokemon }) {
  const { url_image, pokemon: name } = pokemon;

  return (
    <li className={styles.Card}>
      <img src={url_image} alt={name} />

      <h2 className={styles.Header} title={name}>
        {name}
      </h2>

      {/* <div className={styles.Types}>
        <Type type={type_1} />
        <Type type={type_2} />
      </div> */}
    </li>
  );
}

// function Type({ type }) {
//   return type === 'NA' ? null : <span>{type}</span>;
// }
