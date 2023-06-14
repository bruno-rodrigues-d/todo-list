import { PlusCircle } from 'phosphor-react';

import styles from './TaskBar.module.css';

export function TaskBar() {
  return(
    <div className={styles.taskbar}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
      />
      <button>
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}