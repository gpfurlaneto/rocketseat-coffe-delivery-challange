import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  gap: 12px;
  width: 100%;
  padding: 16px;
  border: 1px solid transparent;
  background: ${(props) => props.theme.colors['base-button']};
  ${mixins.fonts.buttonM};

  cursor: pointer;

  transition: all 0.2s;

  text-transform: uppercase;

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    border-color: ${({ theme }) => theme.colors.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
