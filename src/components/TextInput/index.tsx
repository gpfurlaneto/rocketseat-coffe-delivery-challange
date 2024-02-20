import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'
import { InputContainer } from './styles'
import { ErrorMessage } from '../ErrorMessage'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

export const TextInput = forwardRef(function TextInput(
  { error, optional, onBlur, onFocus, ...props }: Props,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <InputContainer>
      <input
        data-state={isFocused ? 'focused' : 'blurred'}
        type="text"
        ref={ref}
        onBlur={handleBlur}
        onFocus={handleFocus}
        {...props}
      />
      {optional && <span>Optional</span>}
      {error?.message ? <ErrorMessage message={error.message} /> : null}
    </InputContainer>
  )
})
