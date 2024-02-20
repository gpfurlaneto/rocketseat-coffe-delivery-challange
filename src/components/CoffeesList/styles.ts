import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 54px;

  margin: 0px auto;
  padding: 32px 20px 150px;
  width: 100%;
`

export const Header = styled.hgroup`
  h2 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  justify-content: space-between;
  list-style: none;
  width: 100%;
  grid-row-gap: 40px;
  grid-column-gap: 32px;

  @media (max-width: 584px) {
    justify-content: center;
  }

  @media (max-width: 296px) {
    grid-template-columns: 1fr;
  }
`
