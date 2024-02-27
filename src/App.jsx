import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import Bottombar from "./components/Bottombar";
import EmailList from "./components/EmailList";

function App() {
  const [openEmail, setOpenEmail] = useState(null);

  return (
    <div className="scrollbar-thin scrollbar-thumb-zinc-100 dark:scrollbar-thumb-zinc-100 scrollbar-track-zinc-100 dark:scrollbar-track-zinc-800 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <Sidebar />
          <EmailList setOpenEmail={setOpenEmail} />
          {JSON.stringify(openEmail)}
          <Bottombar />
        </div>
      </Container>
    </div>
  );
}

export default App;
