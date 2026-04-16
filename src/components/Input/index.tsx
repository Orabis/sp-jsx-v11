import style from './style.module.css'
import '@/interfaces/main.ts'
import type { inputInterface } from '@/interfaces/main.ts'

function Input({ labelName, placeholder, isReadOnly, value, onChange }: inputInterface) {
  return (
    <>
      <div className={style.inputField}>
        <label htmlFor={labelName}>{labelName}</label>
        <input
          id={labelName}
          value={value}
          onChange={onChange}
          type="text"
          name={labelName}
          placeholder={placeholder}
          disabled={isReadOnly}
        ></input>
      </div>
    </>
  )
}

export default Input
