import { useState } from 'react';
import { useTeaFamilyActions } from '../../state/hooks/tea';
import { InputControl, FormButton } from '../Forms/FormControls.jsx';
import styles from './AddFamily.css';

export default function AddFamily() {
  const { add } = useTeaFamilyActions();
  const [name, setName] = useState('');
  const handleChange = ({ target }) => setName(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ family: name });
    setName('');
  };

  return (
    <form className={styles.AddFamily} onSubmit={handleSubmit}>
      <InputControl
        label="add-tea"
        name="tea"
        value={name}
        onChange={handleChange}
      />

      <FormButton icon={true}>🔍</FormButton>
    </form>
  );
}
