import SlideShow from "./components/SlideShow";
import "./App.css";
import EnterIndicator from "./components/EnterIndicator";
import ScrollIndicator from "./components/ScrollIndicator";
import ContactButton from "./components/contact/ContactButton";
import ClickToOpenButton from "./components/ClickToOpenButton";

function App() {
  return (
    <div className="relative">
      <SlideShow />
      <EnterIndicator />
      <ScrollIndicator />
      <ContactButton />
      <ClickToOpenButton />
    </div>
  );
}

export default App;
