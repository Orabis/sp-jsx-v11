import * as React from 'react'

export interface inputInterface {
  labelName: string
  placeholder: string
  isReadOnly: boolean
  value?: string | undefined
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined
}
export interface buttonInterface {
  buttonType: 'submit' | 'reset' | 'button'
  buttonText: string
}
