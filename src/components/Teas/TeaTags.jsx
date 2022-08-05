import DeleteButton from '../Forms/DeleteButton.jsx';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import styles from './TeaTags.css';

export default function TeaTags({ teas }) {
  return (
    <>
      <ul className={styles.TeaTags}>
        {teas.map((tea) => (
          <li key={tea.id}>
            <h3>{tea.tea_name}</h3>
            <DeleteButton />
          </li>
        ))}
      </ul>

      <form className={styles.AddTea}>
        <InputControl
          required
          title={`Add a new tea to the ${'Black Tea'} family`}
          placeholder="new tea..."
        />

        <FormButton icon={true}>🍵</FormButton>
      </form>
    </>
  );
}
