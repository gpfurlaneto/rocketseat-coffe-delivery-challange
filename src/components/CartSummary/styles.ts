import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  padding: 40px;
  background-color: ${(props) => props.theme.colors['base-card']};
`

export const CoffeeItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px ${(props) => props.theme.colors['base-button']};
  margin-bottom: 24px;
  padding-bottom: 24px;

  aside {
    font-weight: bold;
  }
`

export const CoffeeItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`
export const CoffeeItemActions = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;
  margin-top: 4px;

  svg {
    margin-top: 2px;
    color: ${({ theme }) => theme.colors.purple};
  }
`
export const RemoveButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  ${mixins.fonts.buttonM}
  background-color: ${({ theme }) => theme.colors['base-button']};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-text']};
  align-items: center;
  svg {
    width: 1rem;
    height: 1rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 12px;
`
export const ConfirmationItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
  align-items: center;

  span:first-child {
    ${mixins.fonts.textS};
  }

  span:last-child {
    ${mixins.fonts.textM};
  }
`

export const TotalItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${mixins.fonts.textL}
  font-weight: bold;
`
export const ConfirmButton = styled.button`
  text-transform: uppercase;
  ${mixins.fonts.buttonG}
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};

  padding: 12px 8px;
  border-radius: 6px;
  margin-top: 24px;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
