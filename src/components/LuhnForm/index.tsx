import './style.css' with { type: 'css' }
import Input from '../Input'
import Button from '../Button'
function LuhnForm() {
  return (
    <>
      <div className="luhn-form">
        <Input />
        <Input />
        <Button />
      </div>
    </>
  )
}

export default LuhnForm
