import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 640px;
`
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  background-color: ${(props) => props.theme.colors['base-card']};

  padding: 40px;
  border-radius: 6px;
`

export const FormItemHeader = styled.div<{ $svgColor?: string }>`
  display: flex;
  flex-direction: row;

  gap: 8px;
  svg {
    color: ${({ $svgColor }) => $svgColor};
  }

  span {
    ${mixins.fonts.textM}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const FormGrid = styled.div`
  display: grid;
  grid-gap: 16px 12px;
  grid-template-columns: 200px 1fr 60px;
`

export const FormCell = styled.div<{ $span: number }>`
  grid-column: span ${({ $span }) => $span};
`

export const PaymentOptions = styled.div`
  & div {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
`
