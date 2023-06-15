import { Trash } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './Tasks.module.css';

interface TaskType {
  text: string;
  onDeleteTask: (textDelete: string) => void;
}

export function Tasks({text, onDeleteTask}: TaskType) {
  const [checked, setChecked] = useState<boolean>(false);
  const [numberChecked, setNumberChecked] = useState<boolean[]>([]);

  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
      setChecked(event.target.checked);

      if (event.target.checked === true) {
        setNumberChecked([event.target.checked]);
      }
  }

  function handleDeleteTask() {
    onDeleteTask(text);
  }

  //onCountNumberTasksDone(checked);

  return(
    <>
      <script src="https://kit.fontawesome.com/7368c40b21.js" crossOrigin="anonymous"></script>

      <div className={styles.content}>
        <input
          type="checkbox"
          id="checkboxId"
          checked={checked}
          onChange={handleChecked}
        />
        <span>{text}</span>
        <button
          title='Deletar task'
          onClick={handleDeleteTask}
        >
          <Trash size={20} />
        </button>
      </div>

    </>
  );
}