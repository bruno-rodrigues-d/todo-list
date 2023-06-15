import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { TaskContent } from '../TaskContent/TaskContent';

import styles from './TaskBar.module.css';

export function TaskBar() {
  const [task, setTask] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTask([...task, newTask]);
    setNewTask('');
  }

  function handleChangeTaskText(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskTextInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteTask(taskToDelete: string) {
    const commentsWithoutDeleteOne = task.filter(item => {
      return item !== taskToDelete;
    });

    setTask(commentsWithoutDeleteOne);
  }

  return(
    <>
      <form onSubmit={handleCreateNewTask} className={styles.taskbar}>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          value={newTask}
          onChange={handleChangeTaskText}
          onInvalid={handleNewTaskTextInvalid}
          required
        />
        <button type='submit'>
          Criar
          <PlusCircle size={16} />
        </button>
      </form>

      <TaskContent info={task} onDeleteTask={deleteTask}/>
    </>
  );
}