import { Outlet } from 'react-router-dom';
import Navigation from '../Page/Navigation/Navigation.jsx';
import styles from './Tea.css';

const navigation = [
  { to: '', label: 'Families' },
  { to: 'teas', label: 'teas' },
];

export default function Tea() {
  return (
    <section className={styles.Tea}>
      <header>
        <Navigation navigation={navigation} />
      </header>
      <Outlet />
    </section>
  );
}
