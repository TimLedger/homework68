import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchTasks, addTasks} from "./tasksThunks";
import Preloader from "../../components/Preloader/Preloader";
import BtnPreloader from "../../components/BtnPreloader/BtnPreloader";

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.tasks);
  const [title, setTitle] = useState<string>('');

  const dataChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
  };

  const taskRequest = async (event: React.FormEvent) => {
      event.preventDefault();
      await dispatch(addTasks({
          title,
          status: false,
      }));
      await dispatch(fetchTasks());
  };

  return (
    <div>
      {loading.fetchLoading ? (
        <Preloader />
      ) : (
        <form onSubmit={taskRequest}>
          <div>
            <input
              type="text"
              name="title"
              onChange={dataChanged}
              placeholder="Новая задача..."
              required
            />
          </div>
          <button type="submit" disabled={loading.postLoading}>
            {loading.postLoading ? <BtnPreloader /> : <span>Отправить</span>}
          </button>
        </form>
      )}
    </div>
  );
};

export default TaskForm;