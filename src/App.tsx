import SlideShow from "./components/SlideShow";
import "./App.css";
import EnterIndicator from "./components/EnterIndicator";
import ScrollIndicator from "./components/ScrollIndicator";
import ContactButton from "./components/contact/ContactButton";
import ClickToOpenButton from "./components/ClickToOpenButton";
import earth from "./assets/img/earth.png";
import { motion } from "motion/react";

function App() {
  return (
    <div className="relative overflow-hidden">
      <SlideShow />
      <EnterIndicator />
      <ScrollIndicator />
      <ContactButton />
      <ClickToOpenButton />
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
    </div>
  );
}

export default App;
