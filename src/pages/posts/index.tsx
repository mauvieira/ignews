import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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

  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.content}>
          {posts.map(({ slug, title, updatedAt, excerpt }) => (
            <Link href={`/posts/${slug}`}>
              <a key={slug}>
                <time>{updatedAt}</time>
                <h2>{title}</h2>
                <p>{excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const client = getPrismicClient();

  const response = await client.getAllByType('post');

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