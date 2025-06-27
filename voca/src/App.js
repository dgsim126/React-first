import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcom';

function App() {
  const name= "Donggeun"
  const naver= {
    name: "NAVER",
    url: "https://naver.com"
  }

  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;
