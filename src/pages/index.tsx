import { Grid } from '../components/Grid'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Grid
        title="Compra"
        description="Registro de compras de la aplicación"
        buttonName="View"
      />
      <Grid
        title="Venta"
        description="Registro de ventas de la aplicación"
        buttonName="View"
        buttonOutline={true}
      />
    </div>
  )
}
