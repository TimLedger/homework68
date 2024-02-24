import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import {  } from '../../containers/tasksSlice';
import './TaskForm.css';

const TaskForm: React.FC = () => {
  const tasksValue = useSelector((state: RootState) => state.tasks.value);
  const dispatch = useDispatch();

  return (
    <div>
    </div>
  );
};

export default TaskForm;
