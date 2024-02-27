import { FiSearch } from "react-icons/fi";

export default function SearchForm() {
  return (
    <form
      className="min-w-0 flex-grow flex"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        className="
          mibn-w-0 w-full p-2 rounded-l-lg border-2 border-transparent
          bg-background-200 dark:bg-background-700 text-background-900 dark:text-background-50
          focus:outline-none focus:border-primaryColor-400 transition-colors
        "
        type="text"
        placeholder="Pesquisar..."
      />
      <button
        className="
          min-w-0 py-2 px-4 rounded-r-lg border-2 border-transparent
          bg-background-200 dark:bg-background-700 text-background-900 dark:text-background-50
          focus:outline-none focus:border-primaryColor-400 focus:text-primaryColor-400 transition-colors
        "
        type="button"
      >
        <FiSearch />
      </button>
    </form>
  )
}