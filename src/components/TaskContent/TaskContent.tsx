import { ClipboardText } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Tasks } from '../Tasks/Tasks';
import styles from './TaskContent.module.css';

interface TaskContent {
  info: string[];
  onDeleteTask: (textDelete: string) => void;
}

export function TaskContent({info, onDeleteTask}: TaskContent) {
  const [numberDone, setNumberDone] = useState<number>(0);
  const [currentTasks, setCurrentTasks] = useState<string[]>(info);
  const isTaskEmpty = info.length === 0;

  // function handleNumberDone(numberOfTasksDone: boolean) {
  //   console.log(new Array(info.length).fill(numberOfTasksDone));
  //   console.log(info);

  //   console.log(new Array(info.length).fill(numberOfTasksDone).filter(item => item === true).length);
  //   const numberDone = new Array(info.length).fill(numberOfTasksDone).filter(item => item === true).length;
  //   setNumberDone(numberDone);
  // }

  useEffect(() => {
    setCurrentTasks(info);
  }, [info]);

  function deleteTaskContent(taskToDelete: string) {
    onDeleteTask(taskToDelete);
  }

  return(
    <div className={styles.taskcontent}>
      <div className={styles.taskheader}>
        <div className={styles.taskcreated}>
          <span>Tarefas criadas</span>
          <p>{info.length}</p>
        </div>
        <div className={styles.taskcompleted}>
          <span>Concluídas</span>
          <p>{numberDone}</p>
        </div>
      </div>

      {
        isTaskEmpty ?
          (
            <div className={styles.taskbox}>
              <div className={styles.taskempty}>
                <ClipboardText size={56} />
                <span>Você ainda não tem tarefas cadastradas</span>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </div>
          )
          :
          (
            <div className={styles.tasks}>
              {
                currentTasks.map(item => {
                  return <Tasks key={item} text={item} onDeleteTask={deleteTaskContent} />
                })
              }
            </div>
          )
      }
    </div>
  );
}