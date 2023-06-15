import Controller from "./components/Controller";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="flex justify-between w-full">
      <Landing />
      <Controller />
    </div>
  );
}

export default App;
