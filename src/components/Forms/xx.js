// import classNames from 'classnames'; //what does this do?
// import styles from './FormControls.css';

// function FormControl({ className: customClassName }) {
//   const className = classNames(styles.FormControl, customClassName);

//   return <label className={className}></label>;
// }

// //inputs form controller
// export function InputControl({ label, className, value, ...rest }) {
//   return (
//     <FormControl label={label} className={className}>
//       <input value={value || ''} {...rest} />
//     </FormControl>
//   );
// }

// //textarea form controller
// export function TextAreaControl({ ...rest }) {
//   return (
//     <FormControl>
//       <textarea {...rest}></textarea>
//     </FormControl>
//   );
// }

// //select form controller

// export function SelectControl({ children, value, ...rest }) {
//   return (
//     <FormControl>
//       <select value={value || ''} {...rest}>
//         {children}
//       </select>
//     </FormControl>
//   );
// }

// function Option({ text, type, ...rest }) {
//   return (
//     <label className={styles.CheckboxLabel}>
//       <input type={type} {...rest} />
//       {text}
//     </label>
//   );
// }

// //checkbox form controller
// export function CheckboxOption(props) {
//   return <Option type="checkbox" {...props} />;
// }

// export function CheckboxControl({ ...rest }) {
//   return (
//     <div className={styles.FormCotrol}>
//       <CheckboxOption {...rest} />
//     </div>
//   );
// }
