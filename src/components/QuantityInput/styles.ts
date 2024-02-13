import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['base-button']};

  align-items: center;
  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }
`
