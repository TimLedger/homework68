import {useEffect} from 'react';
import {deleteTasks, fetchTasks, statusTasks} from "./tasksThunks";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import Preloader from "../../components/Preloader/Preloader";
import BtnPreloader from "../../components/BtnPreloader/BtnPreloader";

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
    <div className="task-list-container">
      {loading.fetchLoading ? (
        <Preloader />
      ) : (
        <div className="task-list">
          {tasks.length < 1 ? (
            <h2>Задач еще нет!</h2>
          ) : (
            <div>
              {tasks.map((task, index) => (
                <div className="task-item" key={index}>
                  <p>{task.title}</p>
                  <div className="task-status">
                    {task.status ? <span className="status-done">done</span> : <span className="status-not-done">not done</span>}
                  </div>
                  <input
                    type="checkbox"
                    name="status"
                    onChange={() => changeRequest(task.id)}
                    checked={task.status}
                  />
                  <button
                    onClick={() => deleteRequest(task.id)}
                    disabled={loading.deleteLoading}
                    className="delete-btn"
                  >
                    {loading.deleteLoading ? <BtnPreloader /> : <span>Удалить</span>}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskList;