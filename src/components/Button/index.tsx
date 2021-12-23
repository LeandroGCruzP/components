import { ButtonHTMLAttributes } from 'react'
import { ReactNode } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean
  children: ReactNode
}

export function Button({ outline = false, children, ...props }: ButtonProps) {
  return (
    <div className={styles.container}>
      <button className={!outline ? '' : styles.outline} {...props}>
        {children}
      </button>
    </div>
  )
}
