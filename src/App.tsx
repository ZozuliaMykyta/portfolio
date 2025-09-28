import SlideShow from "./components/SlideShow";
import "./App.css";
import EnterIndicator from "./components/EnterIndicator";
import ScrollIndicator from "./components/ScrollIndicator";
import ContactButton from "./components/contact/ContactButton";

function App() {
  return (
    <div className="relative">
      <SlideShow />
      <EnterIndicator />
      <ScrollIndicator />
      <ContactButton />
    </div>
  );
}

export default App;
