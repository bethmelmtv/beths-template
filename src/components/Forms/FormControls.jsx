import { Children, cloneElement } from 'react';
import classNames from 'classnames'; //what does this do?
import styles from './FormControls.css';

function FormControl({ label, children, className: customClassName }) {
  const classNames = classNames(styles.FormControl, customClassName);

  return (
    <label className={className}>
      <LabelText text={label} />
      {children}
    </label>
  );
}

//inputs form controller
export function InputControl({ label, className, value, ...rest }) {
  return (
    <FormControl label={label} className={className}>
      <input value={value || ''} {...rest} />
    </FormControl>
  );
}

//textarea form controller
export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest}></textarea>
    </FormControl>
  );
}

//select form controller

export function SelectControl({ label, children, value, ...rest }) {
  return (
    <FormControl>
      <select value={value || ''} {...rest}>
        {children}
      </select>
    </FormControl>
  );
}

//checkbox form controller
export function CheckboxOption(props) {
  return <Option type="checkbox" {...props} />;
}
export function CheckboxControl({ label, ...rest }) {
  return (
    <div className={styles.FormCotrol}>
      <LabelText text={label} />
      <CheckboxOption {...rest} />
    </div>
  );
}
