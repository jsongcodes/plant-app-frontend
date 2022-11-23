
import './App.css';

function App() {
  fetch("http://localhost:9292")
  .then((r) => r.json())
  .then((data) => console.log(data));

  return (
<></>
  );
}

export default App;
