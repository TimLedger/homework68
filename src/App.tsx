import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import './App.css';

function App() {

  return (
    <div className="container">
      <TaskForm />
      <TaskList />
    </div>     
  )
}

export default App
