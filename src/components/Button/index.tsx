import type { buttonInterface } from '@/interfaces/main.ts'

function Button({ buttonType, buttonText, onClick }: buttonInterface) {
  return (
    <>
      <button onClick={onClick} type={buttonType}>
        {buttonText}
      </button>
    </>
  )
}

export default Button
