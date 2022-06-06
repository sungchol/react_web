
import './App.css';
import Hello from './component/Hello.js';
import Header from './component/Header.js';
import DayList from './component/DayList.js';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DayList />} />
        <Route path="/day/:day" element={<Day />} />
        <Route path="/create_word" element={<CreateWord />} />
        <Route path="/create_day" element={<CreateDay />} />
        <Route element={<EmptyPage/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
