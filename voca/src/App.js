import './App.css';
import Day from './component/Day';
import DayList from './component/DayList';
import CreateWord from './component/CreateWord.js'
import CreateDay from './component/CreateDay.js'
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
