import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import styles from './styles.module.scss';

interface Props {
  priceId: string;
}

export function SubscribeButton({ priceId }: Props) {
  console.log(priceId);

  const { data: session } = useSession();

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github');
      return;
    }

    await api.post('/subscribe');

  }

  return (
    <button type="button" className={styles.container} onClick={handleSubscribe}>
      Subscribe now
    </button>
  )
}