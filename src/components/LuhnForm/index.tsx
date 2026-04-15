import style from './style.module.css'
import Input from '@/components/Input'
import Button from '@/components/Button'
function LuhnForm() {
  return (
    <>
      <div className={style.luhnForm}>
        <Input placeholder={'entrer les nombres ex.SIRET '} isReadOnly={false} labelName={'Code'} />
        <Button buttonType={'submit'} buttonText={'Calculer'} />
        <Input placeholder={''} isReadOnly={true} labelName={'Check Digit'} />
        <Input placeholder={''} isReadOnly={true} labelName={'Full Code'} />
      </div>
    </>
  )
}

export default LuhnForm
