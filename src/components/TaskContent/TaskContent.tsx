import { ClipboardText } from 'phosphor-react';
import { Tasks } from '../Tasks/Tasks';
import styles from './TaskContent.module.css';

interface TaskContent {
  info: string[];
}

export function TaskContent({info}: TaskContent) {
  const isTaskEmpty = info.length === 1;

  return(
    <div className={styles.taskcontent}>
      <div className={styles.taskheader}>
        <div className={styles.taskcreated}>
          <span>Tarefas criadas</span>
          <p>{info.length}</p>
        </div>
        <div className={styles.taskcompleted}>
          <span>Concluídas</span>
          <p>0</p>
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
                info.map(item => {
                  return <Tasks text={item} />
                })
              }
            </div>
          )
      }
    </div>
  );
}