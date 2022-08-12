import { useTeaFamilies } from '../../state/hooks/tea.js';
import styles from './FamilyList.css';
import Family from './Family.jsx';

export default function FamilyList() {
  const { families } = useTeaFamilies(); //families destructured from hook
  console.log(families, 'FAMI');
  return (
    <section className={styles.Family}>
      {families.map((family) => {
        return <Family key={family.id} family={family} />;
      })}
    </section>
  );
}

// return <Family key={family.id} family={family}>{family.family}</Family>;/
