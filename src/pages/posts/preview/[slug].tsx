import { useEffect } from 'react';
import Head from 'next/head';
import { GetStaticProps } from "next";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";
import { formatDate } from '../../../util/formatDate';
import styles from '../post.module.scss';

interface Props {
  post: {
    slug: string;
    title: string;
    updatedAt: string;
    excerpt: string;
  }
}

export default function PostPreview(props: Props) {

  const { data: session } = useSession();
  const router = useRouter();

  const { post: { slug, title, updatedAt, excerpt } } = props;

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${slug}`)
    }
  }, [session])

  return (
    <>
      <Head>
        <title>{title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{title}</h1>
          <span>{updatedAt}</span>
          <div className={`${styles.content} ${styles.preview}`} dangerouslySetInnerHTML={{ __html: excerpt }} />
          <div className={styles.cointinueReading}>
            Wanna continue reading?
            <Link href="/">
              <a>Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('post', String(slug));

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    updatedAt: formatDate(response.last_publication_date),
    excerpt: response.data.content[0].text
  }

  return {
    props: { post }
  }
}