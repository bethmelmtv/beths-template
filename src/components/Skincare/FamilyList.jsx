import { useSkincare } from '../../state/hooks/tea.js';
import styles from './FamilyList.css';

export default function Skincare() {
  const { skincare } = useSkincare(); //skincare destructured from hook
  console.log(skincare);
  return (
    <section className={styles.Skincare}>
      {skincare.map(({ type }, i) => {
        return <p key={type + i}>{type}</p>;
      })}
      {/* skincare map here */}
    </section>
  );
}

//equivelanet of family list
