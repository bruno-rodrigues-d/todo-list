import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';

export function Tasks() {
  return(
    <>
      <script src="https://kit.fontawesome.com/7368c40b21.js" crossOrigin="anonymous"></script>

      <div className={styles.content}>
        <input type="checkbox" id="checkboxId" />
        <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
        <button title='Deletar task'>
          <Trash size={20} />
        </button>
      </div>

    </>
  );
}