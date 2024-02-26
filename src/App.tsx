import TaskForm from './containers/TaskList/TaskForm';
import TaskList from './containers/TaskList/TaskList';
import './App.css';

const App = () => {

  return (
    <div className="container">
      <TaskForm />
      <TaskList />
    </div>     
  )
}

export default App;
