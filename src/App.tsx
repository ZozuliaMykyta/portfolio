import SlideShow from "./components/SlideShow";
import "./App.css";
import EnterIndicator from "./components/EnterIndicator";
import ScrollIndicator from "./components/ScrollIndicator";
import ContactButton from "./components/contact/ContactButton";
import ClickToOpenButton from "./components/ClickToOpenButton";
import earth from "./assets/img/earth.png";

function App() {
  return (
    <div className="relative">
      <SlideShow />
      <EnterIndicator />
      <ScrollIndicator />
      <ContactButton />
      <ClickToOpenButton />
      <img
        className="absolute bottom-[-95%] left-[50%] -translate-x-[50%] z-30 pointer-events-none w-[80%]"
        src={earth}
        alt="Earth"
      />
    </div>
  );
}

export default App;
