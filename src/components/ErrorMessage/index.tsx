import { Container } from './styles'

type ErrorMessageProps = {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <Container role="alert">{message}</Container>
}
