import styles from './FormComponents.module.css';

export function Fieldset ({header, children}) {
  return (
    <fieldset>
      <header className={styles.fieldsetHeader}>
        {header}
      </header>
      <div className={styles.fieldsetInputs}>
        {children}
      </div>
    </fieldset>
  );
}

export function Input({label, type, attributeName, register, validations, error, step=1}) {
  return (
    <>
      <div className={styles.labelInput}>
        <label htmlFor={attributeName}>{label}</label>
        <input id={attributeName}
               step={step}
               type={type} {...register(attributeName, {...validations})} />
      </div>
      {error && (
        <div className={styles.error}>{error.message}</div>
      )}
    </>
  );
}

export function Select({label, attributeName, register, validations, options, error}) {
  return (
    <>
      <div className={styles.labelInput}>
        <label htmlFor={attributeName}>{label}</label>
        <select id={attributeName} {...register(attributeName, {...validations})}>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      {error && (
        <div className={styles.error}>{error.message}</div>
      )}
    </>
  );
}
