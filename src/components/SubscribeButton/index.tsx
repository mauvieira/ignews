import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss';

interface Props {
  priceId: string;
}

export function SubscribeButton({ priceId }: Props) {
  console.log(priceId);

  const { data: session } = useSession();

  const handleSubscribe = () => {
    if (!session) {
      signIn('github');
      return;
    }

  }

  return (
    <button type="button" className={styles.container} onClick={handleSubscribe}>
      Subscribe now
    </button>
  )
}