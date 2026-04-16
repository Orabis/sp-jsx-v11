import type { ChangeEventHandler, MouseEventHandler } from 'react'

export interface inputInterface {
  labelName: string
  placeholder: string
  isReadOnly: boolean
  value?: string | undefined
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export interface buttonInterface {
  buttonType: 'submit' | 'reset' | 'button'
  buttonText: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}
