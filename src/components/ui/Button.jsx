// src/components/Button.jsx

export default function Button({
  children,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`button-class ${className}`}
    >
      {children}
    </button>
  );
}