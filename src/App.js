import './App.css';
import Todo from './components/Todo/Todo';
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <GlobalStyle>
      <div className="App">
         <Todo />
      </div>
    </GlobalStyle>
  );
}

export default App;
