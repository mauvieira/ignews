import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}