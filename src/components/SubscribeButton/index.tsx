import styles from './styles.module.scss';

interface Props {
  priceId: string;
}

export function SubscribeButton({ priceId }: Props) {
  console.log(priceId)

  return (
    <button type="button" className={styles.container}>
      Subscribe now
    </button>
  )
}