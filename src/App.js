import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./components/Header.jsx"
import MenuList from './components/MenuList';

const App = () => {
  return (
    <div>
      <Header/>
      <MenuList/>
    </div>
  )
}

export default App