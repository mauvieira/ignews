import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/react';

import styles from './styles.module.scss';

export function SignInButton() {

  const { data } = useSession();

  console.log('data', data);

  return data ? (
    <button type="button" className={styles.container} onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {data.session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.container}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}