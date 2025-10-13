import SlideShow from "./components/SlideShow";
import "./App.css";
import EnterIndicator from "./components/EnterIndicator";
import ScrollIndicator from "./components/ScrollIndicator";
import ContactButton from "./components/contact/ContactButton";
import ClickToOpenButton from "./components/info/Info";
import earth from "./assets/img/earth.png";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

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
      <ClickToOpenButton />
      {isWide && (
        <motion.img
          className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[66%] z-30 pointer-events-none w-[1100px] h-[1100px]"
          src={earth}
          alt="Earth"
          animate={{ rotate: 360 }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}

export default App;
