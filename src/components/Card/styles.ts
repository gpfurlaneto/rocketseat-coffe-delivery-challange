import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CardContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 0 20px 20px;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme.colors['base-card']};

  h3 {
    margin-top: 16px;
    ${mixins.fonts.titleS}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    margin-top: 8px;
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-label']};
  }

  img {
    margin-top: -20px;
    align-self: center;
  }
`

export const TagContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 12px;
  justify-content: center;

  span {
    width: fit-content;

    padding: 4px 8px;
    border-radius: 100px;
    color: ${(props) => props.theme.colors['yellow-dark']};
    background-color: ${(props) => props.theme.colors['yellow-light']};

    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  margin-right: auto;
  align-items: baseline;

  color: ${({ theme }) => theme.colors['base-text']};
  ${mixins.fonts.textS}

  :last-child {
    height: max-content;
    ${mixins.fonts.titleM}
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
    $itemAdded ? theme.colors['yellow-dark'] : theme.colors['purple-dark']};

    padding: 8px;
    border-radius: 6px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
    $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`
