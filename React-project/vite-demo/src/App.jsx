import Card from "./components/Card";

function App() {

  let publishJesper = true;

  return (
    <div className="app">
      { publishJesper ? <Card /> : <p>Ingen Jesper funnen!</p> }
    </div>
  )
}

export default App;
