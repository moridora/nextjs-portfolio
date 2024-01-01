import styles from '@/styles/Background.module.css'
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
}

export function Background({ children }: Props) {
  return (
    <div className={styles.rectangleBack}>
      <div>
        {children}
      </div>
    </div>
  )
}
