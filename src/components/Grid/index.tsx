import { Button } from '../Button'
import styles from './styles.module.scss'

type GridProps = {
  title: string
  description: string
  buttonName: string
  buttonOutline?: boolean // Default: false
}

export function Grid({
  title,
  description,
  buttonName,
  buttonOutline
}: GridProps) {
  return (
    <div className={styles.container}>
      <header>
        <h2>{title}</h2>
      </header>

      <main>
        <span>{description}</span>
      </main>

      <footer>
        <Button outline={buttonOutline}>{buttonName}</Button>
      </footer>
    </div>
  )
}
