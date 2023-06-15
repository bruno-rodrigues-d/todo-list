import { Trash } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './Tasks.module.css';

interface TaskType {
  text: string;
  onDeleteTask: (textDelete: string) => void;
  onGetNumberDone: (numberDone: string[]) => void;
}

export function Tasks({text, onGetNumberDone ,onDeleteTask}: TaskType) {
  const [isChecked, setIsChecked] = useState<string[]>([]);

  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
      const {value, checked} = event.target;

      if (checked) {
        setIsChecked(item => [...item, value]);
      } else {
        setIsChecked(item => {
          return [...item.filter(selected => selected !== value)]
         });
      }
  }

  function handleDeleteTask() {
    onDeleteTask(text);
  }

  onGetNumberDone(isChecked);
  return(
    <>
      <script src="https://kit.fontawesome.com/7368c40b21.js" crossOrigin="anonymous"></script>

      <div className={styles.content}>
        <input
          type="checkbox"
          id="checkboxId"
          value={text}
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