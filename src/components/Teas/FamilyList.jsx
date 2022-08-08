import { useTeaFamilies } from '../../state/hooks/tea.js';
import styles from './FamilyList.css';
// import Family from './Family.jsx';

export default function FamilyList() {
  const { families } = useTeaFamilies(); //families destructured from hook
  return (
    <section className={styles.Family}>
      {families.map((family) => {
        <p>{family}</p>;
        console.log('family', family);
      })}
    </section>
  );
}
