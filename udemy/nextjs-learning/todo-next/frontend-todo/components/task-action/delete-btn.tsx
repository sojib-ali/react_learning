import styles from './btn.module.css';

export default function DeleteButton() {
    return (
        <button className={`${styles.button} ${styles.deleteButton}`}>
            Delete
        </button>
    );
}

