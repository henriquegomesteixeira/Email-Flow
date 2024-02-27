import Avatar from "./Avatar";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header
      className="
        px-4 xl:px-6 h-16 lg:h-20
        flex items-center justify-between
        gap-6 md:gap-16 xl:gap-32
        bg-background-100 dark:bg-background-800
        text-background-800 dark:text-background-100
      "
    >
      <Logo />
      <SearchForm />
      <Avatar />
    </header>
  )
}