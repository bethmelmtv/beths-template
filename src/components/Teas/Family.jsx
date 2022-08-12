import { useEffect, useRef, useState } from 'react';
import { useTeaFamilyActions } from '../../state/hooks/tea.js';
import TeaTags from './TeaTags.jsx';
import DeleteButton from '../Forms/DeleteButton.jsx';
import { InputControl } from '../Forms/FormControls.jsx';
import styles from './Family.css';

export default function Family({ family }) {
  const { update, remove } = useTeaFamilyActions();

  const handleEdit = async (edited) => {
    await update(family.id, edited);
  };

  const handleRemove = async () => {
    const message = `Are you sure you want to remove family ${family.family}?`;
    if (confirm(message)) {
      await remove(family.id);
    }
  };

  return (
    <li className={styles.Family}>
      <DeleteButton className={styles.DeleteButton} onClick={handleRemove} />
      <div className={styles.ContentContainer}>
        <EditableHeader initialValue={family.family} onEdit={handleEdit} />
        <TeaTags teas={family.teas} />
      </div>
    </li>
  );
}

function EditableHeader({ initialValue, onEdit }) {
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const [name, setName] = useState(initialValue);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing) ref.current.focus();
  }, [editing]);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleEdit = async () => {
    setEditing(false);
    if (name === initialValue) return;
    await onEdit({ name });
  };

  const handleKeyUp = (e) => {
    if (e.code === 'Enter') handleEdit();
  };

  return (
    <header>
      {editing ? (
        <InputControl
          ref={ref}
          name="name"
          value={name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onBlur={handleEdit}
        />
      ) : (
        <h2 onDoubleClick={handleDoubleClick}>{name}</h2>
      )}
    </header>
  );
}
