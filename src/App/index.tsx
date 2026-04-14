import './style.css' with { type: 'css' }
import LuhnForm from '../components/LuhnForm'
function App() {
  return (
    <>
      <main>
        <hgroup className="header-name">
          <h1>Algorithme de Luhn - Calculer la clé</h1>
          <p>Calculez le chiffre de contrôle avec l'algorithme de Luhn</p>
        </hgroup>
        <LuhnForm />
      </main>
    </>
  )
}

export default App
