import styles from './notfound.module.css'
import { Link } from 'react-router-dom'

export function NotFound() {

   return (

    <div className={styles.container}>
      <h1 className={styles.title}>Página 404, esta página não existe!</h1>

      <p>Pode ter acontecido algum erro, volte para a tela inicial e tente novamente. Procure a cripto pela listagem ou tente digitar o nome de outras formas.</p>
      <p>Lembrando que nomes com espaçamento, utilize "-" para representar o espaço entre as palavras (por exemplo: shiba-inu).</p>
      
      <Link to="/">
        <button className={styles.buttonHome}>Voltar para a Home</button>
      </Link>
    </div>
   )
 }
 