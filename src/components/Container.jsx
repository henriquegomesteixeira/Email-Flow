export default function Container({ children }) {
  return (
    <div
      className="
        bg-background-100 dark:bg-background-800
        text-background-900 dark:text-background-50
        px-2 pb-2 xl:px-6 xl:pb-4
        h-[calc(100vh_-_4rem)] lg:h-[calc(100vh_-_5rem)]
      "
    >
      { children }
    </div>
  );
}