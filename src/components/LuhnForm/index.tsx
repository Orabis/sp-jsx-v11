import style from './style.module.css'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { type ChangeEvent, useState } from 'react'
import { processLuhn } from '@/utils/luhncalc.ts'

function LuhnForm() {
  const [code, setCode] = useState('')
  const [digit, setDigit] = useState('')
  const [fullCode, setFullCode] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCode(e.currentTarget.value)
  }

  function calculateLuhn(){
    const [newDigit, newFullCode ] = processLuhn(code)
    setDigit(newDigit)
    setFullCode(newFullCode)
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
        <Button buttonType={'submit'} buttonText={'Calculer'} onClick={calculateLuhn} />
        <Input placeholder={''} isReadOnly={true} labelName={'Check Digit'} value={digit}/>
        <Input placeholder={''} isReadOnly={true} labelName={'Full Code'} value={fullCode}/>
      </div>
    </>
  )
}

export default LuhnForm
