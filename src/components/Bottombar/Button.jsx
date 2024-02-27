export default function Button({ active, onClick, children }) {
  return (
    <button
      className={`
      flex-1 py-2 mb-0.5 rounded-lg shadow
      text-background-900 dark:text-background-100
      ${active
        ? "bg-primaryColor-300 dark:bg-primaryColor-600"
        : "bg-background-200 dark:bg-background-900"}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}