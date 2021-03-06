import Head from 'next/head';
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";
import { formatDate } from '../../util/formatDate';
import styles from './post.module.scss';

interface Props {
  post: {
    slug: string;
    title: string;
    updatedAt: string;
    content: string;
  }
}

export default function Post(props: Props) {

  const { post: { title, updatedAt, content } } = props;

  return (
    <>
      <Head>
        <title>{title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{title}</h1>
          <span>{updatedAt}</span>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
    </>
  )
};

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

  const session = await getSession({ req });

  const { slug } = params;

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: `/posts/preview/${slug}`,
        permanent: false
      }
    }
  }

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('post', String(slug));

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    updatedAt: formatDate(response.last_publication_date),
    content: RichText.asHtml(response.data.content)
  }

  return {
    props: { post }
  }
}