import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    padding: 12px;
    width: 100%;

    background: ${(props) => props.theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    border-radius: 6px;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }

    transition: all 0.2s;

    &[data-state='focused'] {
      border-color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    &[data-state='blurred'] {
      border-color: ${({ theme }) => theme.colors['base-button']};
    }
  }

  span {
    position: absolute;
    top: 30%;
    right: 0;
    color: ${({ theme }) => theme.colors['base-label']};
    padding-right: 12px;
    ${mixins.fonts.textS};
    font-style: italic;
  }
`
