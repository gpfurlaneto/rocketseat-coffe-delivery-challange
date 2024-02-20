import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 80px 20px;

  img {
    margin-bottom: -13px;
  }
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const OrderDetailsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const OrderDetails = styled.div`
  border-radius: 6px 36px;

  border: 1px solid;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
`

export const OrderDetailsContent = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;

    > svg {
      padding: 8px;
      border-radius: 999px;
    }
  }
`
