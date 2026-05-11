type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  idPrefix?: string;
  placeholder?: string;
};

export function FormField({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  error,
  idPrefix,
  placeholder,
}: FieldProps) {
  const id = idPrefix ? `${idPrefix}-${name}` : name;
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label} {required ? <span className="text-orange-deep">*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="field"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-orange-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectProps = {
  label: string;
  name: string;
  required?: boolean;
  options: readonly string[];
  error?: string;
  idPrefix?: string;
  placeholder?: string;
};

export function FormSelect({
  label,
  name,
  required,
  options,
  error,
  idPrefix,
  placeholder = "Select…",
}: SelectProps) {
  const id = idPrefix ? `${idPrefix}-${name}` : name;
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label} {required ? <span className="text-orange-deep">*</span> : null}
      </label>
      <select id={id} name={name} required={required} className="field" defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error ? (
        <p className="mt-1 text-xs text-orange-deep">{error}</p>
      ) : null}
    </div>
  );
}

type TextareaProps = {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  optional?: boolean;
  error?: string;
  idPrefix?: string;
  placeholder?: string;
};

export function FormTextarea({
  label,
  name,
  required,
  rows = 4,
  optional,
  error,
  idPrefix,
  placeholder,
}: TextareaProps) {
  const id = idPrefix ? `${idPrefix}-${name}` : name;
  return (
    <div className="sm:col-span-2">
      <label htmlFor={id} className="field-label">
        {label}{" "}
        {required ? (
          <span className="text-orange-deep">*</span>
        ) : optional ? (
          <span className="text-ink-soft">(optional)</span>
        ) : null}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        className="field"
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-orange-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
