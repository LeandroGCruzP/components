import Link from 'next/link'

import LogoIcon from '../../../public/logo.svg'
import CartIcon from '../../../public/cart.svg'
import UserIcon from '../../../public/user.svg'
import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <LogoIcon />
        <div className={styles.author}>
          <h3>Leandro G. Cruz</h3>
          <h5>Software Enginner</h5>
        </div>
      </div>

      <div className={styles.linksAction}>
        <Link href="#">Bikes</Link>
        <Link href="#">Delivery</Link>
        <Link href="#">Contact</Link>
        <button>
          <CartIcon />
        </button>
        <button>
          <UserIcon />
        </button>
      </div>
    </div>
  )
}
