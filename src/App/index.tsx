import style from './style.module.css'
import LuhnForm from '@/components/LuhnForm'

function App() {
  return (
    <>
      <header>
        <hgroup className={style.headerName}>
          <h1>Algorithme de Luhn - Calculer la clé</h1>
          <p>Calculez le chiffre de contrôle avec l'algorithme de Luhn</p>
        </hgroup>
      </header>
      <main>
        <LuhnForm />
      </main>
      <footer>
        <p>Léo Merkel - 2026</p>
      </footer>
    </>
  )
}

export default App
