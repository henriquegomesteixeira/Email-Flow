export default function WriteButton({ children }) {
  return (
    <button
      className="
        bg-primaryColor-400 hover:bg-primaryColor-400
        dark:bg-primaryColor-500 dark:hover:bg-primaryColor-600
        py-2 w-full rounded-lg transition-colors
      "
      type="button"
    >
      { children }
    </button>
  )
}