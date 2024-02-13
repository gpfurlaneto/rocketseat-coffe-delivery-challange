import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const Container = styled.header`
  width: 100%;
  padding: 32px 20px;
  max-width: 1160px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Aside = styled.aside`
  display: flex;
  flex-direction: row;

  gap: 12px;

  div {
    display: flex;
    flex-direction: row;
    gap: 4px;

    align-items: center;
    padding: 10px 8px;

    color: ${(props) => props.theme.colors['purple-dark']};
    background: ${(props) => props.theme.colors['purple-light']};

    border-radius: 6px;

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px;

    color: ${(props) => props.theme.colors['yellow-dark']};
    background: ${(props) => props.theme.colors['yellow-light']};

    border-radius: 6px;

    &[aria-disabled='true'] {
      pointer-events: none;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${(props) => props.theme.colors.white};
      background: ${(props) => props.theme.colors['yellow-dark']};

      border-radius: 50%;

      width: 20px;
      height: 20px;

      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);
    }
  }
`
