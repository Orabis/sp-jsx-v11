import './style.css' with { type: 'css' }
import Input from '../Input'
import Button from '../Button'
function LuhnForm() {
  return (
    <>
      <div className="luhn-form">
        <Input placeholder={'entrer les nombres ex.SIRET '} isReadOnly={false} labelName={'Code'} />
        <Button buttonType={'submit'} buttonText={'Calculer'} />
        <Input placeholder={''} isReadOnly={true} labelName={'Check Digit'} />
        <Input placeholder={''} isReadOnly={true} labelName={'Full Code'} />
      </div>
    </>
  )
}

export default LuhnForm
