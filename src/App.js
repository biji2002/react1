import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <div>
  
      <ViewStudent/>
      <DeleteStudent/>
      <SearchStudent/>
      <AddStudent/>
      
      
    </div>
  );
}

export default App;
