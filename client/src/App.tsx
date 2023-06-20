import Controller from "./components/Controller";
import FrostedGlass from "./components/FrostedGlass";

function App() {
  return (
    <div className="background-container">
      <FrostedGlass>
        <Controller />
      </FrostedGlass>
    </div>
  );
}

export default App;
