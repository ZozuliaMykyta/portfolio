import SlideShow from "./components/SlideShow";
import "./App.css";
import EnterIndicator from "./components/EnterIndicator";
import ScrollIndicator from "./components/ScrollIndicator";
import ContactButton from "./components/contact/ContactButton";
import { useEffect, useState } from "react";
import Earth from "./components/Earth";
// import Info from "./components/info/Info";

function App() {
  const [isWide, setIsWide] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <SlideShow />
      {isWide && <EnterIndicator />}
      <ScrollIndicator />
      <ContactButton />
      {/* <Info /> */}
      {/* {isWide && <Earth />} */}
    </div>
  );
}

export default App;
