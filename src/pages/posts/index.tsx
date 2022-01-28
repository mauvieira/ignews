import { GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import { formatDate } from '../../util/formatDate';
import styles from './styles.module.scss';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface Props {
  posts: Post[]
}

export default function Posts({ posts }: Props) {

  console.log('posts', posts);

  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          {posts.map(({ slug, title, updatedAt, excerpt }) => (
            <a href={slug} key={slug}>
              <time>{updatedAt}</time>
              <h2>{title}</h2>
              <p>{excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const client = getPrismicClient();

  const response = await client.getAllByType('post');

  console.log(JSON.stringify(response, null, 2));

  const posts = response.map(post => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    excerpt: post.data.content[0].text,
    updatedAt: formatDate(post.last_publication_date)
  }));

  return {
    props: {
      posts
    }
  }
}