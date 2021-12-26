import Link from 'next/link'

import { Button } from '../Button'
import { Header } from '../Header'
import PantsImg from '../../../public/pants.svg'
import TshirtImg from '../../../public/tshirt.svg'
import PantsIcon from '../../../public/pantsIcon.svg'
import TshirtIcon from '../../../public/tshirtIcon.svg'
import MaleIcon from '../../../public/male.svg'
import FemaleIcon from '../../../public/female.svg'
import styles from './styles.module.scss'

export function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Header />
        </div>

        <div className={styles.background}>
          <div></div>
          <div></div>
        </div>

        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.headerMain}>
              <h2>LC</h2>
              <div className={styles.links}>
                <Link href="#">
                  <a className={styles.active}>Overview</a>
                </Link>
                <Link href="#">Specs</Link>
              </div>
            </div>

            <div className={styles.contentMain}>
              <div className={styles.sidebarContentMain}>
                <button className={styles.active}>
                  <MaleIcon />
                </button>
                <button>
                  <FemaleIcon />
                </button>
              </div>
              <div className={styles.contentContentMain}>
                <div className={styles.tshirt}>
                  <TshirtImg />
                </div>
                <div className={styles.pants}>
                  <PantsImg />
                </div>
              </div>
            </div>

            <div className={styles.footerMain}>
              <div className={styles.price}>
                <h3>Price</h3>
                <h2>$59,99</h2>
              </div>
              <Button>Add to Cart</Button>
            </div>
          </div>

          <div className={styles.right}>
            <h2>Select your preference</h2>
            <div className={styles.buttonSection}>
              <button className={styles.active}>
                <TshirtIcon />
              </button>
              <button>
                <PantsIcon />
              </button>
            </div>
            <h3>Tshirt</h3>
            <div className={styles.buttonSelect}>
              <div className={styles.select}>
                <button className={styles.active}>
                  <TshirtImg />
                </button>
                <h5>Default</h5>
              </div>

              <div className={styles.select}>
                <button>
                  <TshirtImg />
                </button>
                <h5>Nike</h5>
              </div>

              <div className={styles.select}>
                <button>
                  <TshirtImg />
                </button>
                <h5>Jordan</h5>
              </div>

              <div className={styles.select}>
                <button>
                  <TshirtImg />
                </button>
                <h5>Puma</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
