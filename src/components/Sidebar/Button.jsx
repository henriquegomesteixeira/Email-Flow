export default function Button({ active, children }) {
  const backgroundColor = active ? "bg-background-200 dark:bg-background-900" : "";
  return (
    <button
      className={`
        py-2 px-4 w-full text-left rounded-lg
        ${backgroundColor} transition-colors
        hover:bg-background-200 dark:hover:bg-background-900
      `}
      type="button"
    >
      {children}
    </button>
  )
}