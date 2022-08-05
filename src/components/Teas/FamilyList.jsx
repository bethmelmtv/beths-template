import { useTeaFamilies } from '../../state/hooks/tea.js';
import styles from './FamilyList.css';

export default function FamilyList() {
  const { families } = useTeaFamilies(); //families destructured from hook
  console.log(families);
  return (
    <section className={styles.Family}>
      {families.map(({ family, id }) => {
        return <p key={id}>{family}</p>;
      })}
      {/* family map here */}
    </section>
  );
}

//equivelanet of family list
