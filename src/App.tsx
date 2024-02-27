import TaskForm from './containers/TaskList/TaskForm';
import TaskList from './containers/TaskList/TaskList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {

  return (
    <div className="container">
      <div className="phone">
        <Header />
        <div className="screen">
          <TaskForm />
          <TaskList />
        </div>
        <Footer />
      </div>
    </div>     
  );
};

export default App;