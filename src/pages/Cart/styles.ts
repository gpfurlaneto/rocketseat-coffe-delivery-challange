import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 40px 20px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  h2 {
    ${mixins.fonts.titleXS}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`
