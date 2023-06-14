import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

interface TaskType {
  text: string;
}

export function Tasks({text}: TaskType) {
  return(
    <>
      <script src="https://kit.fontawesome.com/7368c40b21.js" crossOrigin="anonymous"></script>

      <div className={styles.content}>
        <input type="checkbox" id="checkboxId" />
        <span>{text}</span>
        <button title='Deletar task'>
          <Trash size={20} />
        </button>
      </div>

    </>
  );
}