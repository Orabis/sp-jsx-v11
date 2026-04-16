import style from './style.module.css'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { type ChangeEvent, useState } from 'react'

function LuhnForm() {
  const [code, setCode] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCode(e.currentTarget.value)
    console.log(code)
  }
  return (
    <>
      <div className={style.luhnForm}>
        <Input
          value={code}
          onChange={handleChange}
          placeholder={'entrer les nombres ex.SIRET '}
          isReadOnly={false}
          labelName={'Code'}
        />
        <Button buttonType={'submit'} buttonText={'Calculer'} />
        <Input placeholder={''} isReadOnly={true} labelName={'Check Digit'} />
        <Input placeholder={''} isReadOnly={true} labelName={'Full Code'} />
      </div>
    </>
  )
}

export default LuhnForm
