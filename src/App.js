import NavBar from './NavBar';
import Home from './Home';
function App() {
  // const title = 'Welcome to the new blog'

  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
