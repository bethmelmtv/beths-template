import { Children, cloneElement } from 'react';
import classNames from 'classnames';
import styles from './FormControls.css';

function FormControl({ label, children, className: customClassName }) {
  const className = classNames(styles.FormControl, customClassName);

  return (
    <label className={className}>
      <LabelText text={label} />
      {children}
    </label>
  );
}

function LabelText({ text, as: Tag = 'span' }) {
  if (!text) return null;

  const className = classNames(styles.Label, 'label-text');
  return <Tag className={className}>{text}</Tag>;
}

function Option({ text, type, ...rest }) {
  return (
    <label className={styles.CheckboxLabel}>
      <input type={type} {...rest} />
      {text}
    </label>
  );
}

export function CheckboxOption(props) {
  return <Option type="checkbox" {...props} />;
}

export function RadioOption(props) {
  return <Option type="radio" {...props} />;
}

export function CheckboxControl({ label, ...rest }) {
  return (
    <div className={styles.FormControl}>
      <LabelText text={label} />
      <CheckboxOption {...rest} />
    </div>
  );
}

export function OptionGroupControl({ label, name, size = '100px', children }) {
  return (
    <div className={styles.FormControl}>
      <fieldset>
        <LabelText text={label} as="legend" />
        <div
          className={styles.Options}
          style={{
            gridTemplateColumns: `repeat(
            auto-fill,
            minmax(${size}, 1fr)
          )`,
          }}
        >
          {Children.map(children, (child) => cloneElement(child, { name }))}
        </div>
      </fieldset>
    </div>
  );
}

export function InputControl({ label, className, value, ...rest }) {
  return (
    <FormControl label={label} className={className}>
      <input value={value || ''} {...rest} />
    </FormControl>
  );
}

export function SelectControl({ label, children, value, ...rest }) {
  return (
    <FormControl label={label}>
      <select value={value || ''} {...rest}>
        {children}
      </select>
    </FormControl>
  );
}

export function TextAreaControl({ label, ...rest }) {
  return (
    <FormControl label={label}>
      <textarea {...rest}></textarea>
    </FormControl>
  );
}

export function FormButton({ children, className: customClassName, ...rest }) {
  const className = classNames(styles.FormButton, customClassName);

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export function FormButtonControl(props) {
  return <FormButton className={styles.FormControl} {...props} />;
}

export function Fieldset({ legend, children }) {
  return (
    <fieldset className={styles.Fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
