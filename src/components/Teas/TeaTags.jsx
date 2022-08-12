import DeleteButton from '../Forms/DeleteButton.jsx';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import styles from './TeaTags.css';

export default function TeaTags({ teas }) {
  console.log(teas, 'TEASSSS');
  return (
    <>
      <ul className={styles.TeaTags}>
        {teas.map((tea) => (
          <li key={tea.tea_name}>
            <h3>{tea.tea_name}</h3>
            <DeleteButton />
          </li>
        ))}
      </ul>

      <form className={styles.AddTea}>
        <InputControl
          required
          title={`Add a new tea to the ${'Purple Tea'} family`}
          placeholder="new tea..."
        />

        <FormButton icon={true}>🍵</FormButton>
      </form>
    </>
  );
}
