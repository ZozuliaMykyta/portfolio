import SlideShow from "./components/SlideShow";
import "./App.css";
import EnterIndicator from "./components/EnterIndicator";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
  return (
    <div className="relative">
      <SlideShow />
      <EnterIndicator />
      <ScrollIndicator />
    </div>
  );
}

export default App;
