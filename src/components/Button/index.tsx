import './style.css' with { type: 'css' }
import type { buttonInterface } from '../../../interfaces/main.ts'

function Button({ buttonType, buttonText }: buttonInterface) {
  return (
    <>
      <button type={buttonType}>{buttonText}</button>
    </>
  )
}

export default Button
