import Link from "next/link";
import styles from './page.module.css';

export default function HomePage(){
  return(
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to your To-Do List</h1>
        <p className={styles.description}>
          Get organized and stay on top of your tasks.
        </p>
        <div className={styles.grid}>
          <Link href="/tasks" className={styles.card}>
            <h2>View Tasks &rarr;</h2>
            <p>See all your current tasks.</p>
          </Link>
          <Link href="/task-forms" className={styles.card}>
            <h2>Add a Task &rarr;</h2>
            <p>Create a new task to complete.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}