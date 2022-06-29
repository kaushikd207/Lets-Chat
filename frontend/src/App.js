
import { Route } from 'react-router-dom';
import './App.css';
import Chat from './Pages/Chat';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact/>
      <Route path="/Chats" component={Chat} />
    </div>
  );
}

export default App;
