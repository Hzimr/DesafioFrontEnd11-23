import styled from "styled-components"

export const TagFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: var(--footer-color);
`

export const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  @media (min-width: 0px) {
    width: 320px;
  }
  @media (min-width: 320px) {
    width: calc(320px + (1440 - 320) * ((100vw - 320px) / (1440 - 320)));
  }
  @media (min-width: 1440px) {
    width: 1440px;
  }
`

export const FooterText = styled.p`
  font-size: 0.75rem;
`