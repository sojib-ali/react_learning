import Link from 'next/link';
import styles from './top-header.module.css';

export default function TopHeader(){
    return(
        <header className={styles.header}>
           <Link href="/" className={styles.titleLink}>
             <h1> ToDo </h1> 
           </Link>
        </header>
    )
}