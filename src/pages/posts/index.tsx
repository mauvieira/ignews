import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          <a href='#'>
            <time>21 de janeiro de 2022</time>
            <h2>Top 6 React State Management Libraries for 2022</h2>
            <p>State management is one of the most important aspects of every app. The app’s state dictates what users see, how the app looks, what data is stored, and so on. Thus it’s no wonder that there are so many open-source libraries designed specifically to make state management easier and more enjoyable.</p>
          </a>
          <a href='#'>
            <time>21 de janeiro de 2022</time>
            <h2>Top 6 React State Management Libraries for 2022</h2>
            <p>State management is one of the most important aspects of every app. The app’s state dictates what users see, how the app looks, what data is stored, and so on. Thus it’s no wonder that there are so many open-source libraries designed specifically to make state management easier and more enjoyable.</p>
          </a>
          <a href='#'>
            <time>21 de janeiro de 2022</time>
            <h2>Top 6 React State Management Libraries for 2022</h2>
            <p>State management is one of the most important aspects of every app. The app’s state dictates what users see, how the app looks, what data is stored, and so on. Thus it’s no wonder that there are so many open-source libraries designed specifically to make state management easier and more enjoyable.</p>
          </a>
        </div>
      </main>
    </>
  )
}