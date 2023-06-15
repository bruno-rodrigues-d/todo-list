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
  // const [taskD, setTaskD] = useState<string[]>([]);
  // const [taskDCurrent, setTaskDCurrent] = useState<string[]>([]);
  const [currentTasks, setCurrentTasks] = useState<string[]>(info);
  const isTaskEmpty = info.length === 0;

   function handleNumberDone(taskDone: string[]) {

    //  console.log('taskDone', taskDone);
    //  console.log('taskDone', taskDone.length);
     setNumberDone(taskDone.length);
   }

  useEffect(() => {
    setCurrentTasks(info);
  }, [info]);

  function deleteTaskContent(taskToDelete: string) {
    onDeleteTask(taskToDelete);

    if (taskToDelete.length === 0) {
      setNumberDone(0);
    }
  }

  const isNumberDone = numberDone === 0;

  return(
    <div className={styles.taskcontent}>
      <div className={styles.taskheader}>
        <div className={styles.taskcreated}>
          <span>Tarefas criadas</span>
          <p>{info.length}</p>
        </div>
        <div className={styles.taskcompleted}>
          <span>Concluídas</span>
          {
            isNumberDone
            ?
            (<p>{numberDone}</p>)
            :
            (<p>{numberDone} de {info.length}</p>)
          }
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
                  return <Tasks key={item} text={item} onGetNumberDone={handleNumberDone} onDeleteTask={deleteTaskContent} />
                })
              }
            </div>
          )
      }
    </div>
  );
}