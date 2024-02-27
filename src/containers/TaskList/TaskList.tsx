import {useEffect} from 'react';
import {deleteTasks, fetchTasks, statusTasks} from "./tasksThunks";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import Preloader from "../../components/Preloader/Preloader";
import BtnPreloader from "../../components/BtnPreloader/BtnPreloader";
import './Task.css';

const TaskList = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.items);
  const loading = useAppSelector((state) => state.tasks);
  
  useEffect(() => {
      dispatch(fetchTasks());
  }, [dispatch]);

  const deleteRequest = async (id: string) => {
     await dispatch(deleteTasks(id));
     await dispatch(fetchTasks());
  };

  const changeRequest = async (id: string) => {
      await dispatch(statusTasks(id));
      await dispatch(fetchTasks());
  };

  return (
    <div>
      {loading.fetchLoading ? (
        <Preloader />
      ) : (
        <div className="task-list">
          {tasks.length < 1 ? (
            <h2>Задач еще нет!</h2>
          ) : (
            <ul className="task-list-content">
              {tasks.map((task, index) => (
                <li className={`task ${task.status ? 'completed' : ''}`} key={index}>
                  <label className='task-label'>
                    <input
                      type="checkbox"
                      name="status"
                      onChange={() => changeRequest(task.id)}
                      checked={task.status}
                    />
                    <span className="toggle"></span>
                    <span className="text" title={task.title}>{task.title}</span>
                  </label>
                  <button
                    onClick={() => deleteRequest(task.id)}
                    disabled={loading.deleteLoading}
                    className="delete"
                  >
                    {loading.deleteLoading ? <BtnPreloader /> : <span>Удалить</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskList;