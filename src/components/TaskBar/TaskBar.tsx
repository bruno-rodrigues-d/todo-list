import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { TaskContent } from '../TaskContent/TaskContent';

import styles from './TaskBar.module.css';

export function TaskBar() {
  const [task, setTask] = useState<string[]>(['']);
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTask([...task, newTask]);
  }

  function handleTaskText(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  console.log(task);

  return(
    <>
      <form onSubmit={handleCreateNewTask} className={styles.taskbar}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          onChange={handleTaskText}
        />
        <button type='submit'>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>

      <TaskContent info={task} />
    </>
  );
}