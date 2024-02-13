import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.section`
  position: relative;

  img#hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    max-height: 544px;
    width: 100vw;
    object-fit: cover;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;

  padding: 92px 20px;

  max-width: 1160px;
  margin: 0 auto;
`
export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
`

export const HGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    ${mixins.fonts.titleXL};
    color: ${(props) => props.theme.colors['base-title']};
  }

  p {
    ${mixins.fonts.textL}
    color: ${({ theme }) => theme.colors['base-subtitle']}
  }
`

export const CoffeeInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
`

export const CoffeeInfoItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;

  svg {
    padding: 8px;
    border-radius: 100%;
  }
`
