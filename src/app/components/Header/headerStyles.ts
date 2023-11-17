import styled from "styled-components"

export const TagHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: var(--primary-color);
`

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 0px) {
    width: 320px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2.5rem;
  }
  @media (min-width: 320px) {
    width: calc(320px + (1440 - 320) * ((100vw - 320px) / (1440 - 320)));
    padding-top: calc(1rem + (24 - 16) * ((100vw - 320px) / (1440 - 320)));
    padding-bottom: calc(1rem + (24 - 16) * ((100vw - 320px) / (1440 - 320)));
    padding-left: calc(2rem + (64 - 32) * ((100vw - 320px) / (1440 - 320))); 
    padding-right: calc(2.5rem + (88 - 40) * ((100vw - 320px) / (1440 - 320))); 
    }
  @media (min-width: 1440px) {
    width: 1440px;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 4rem;
    padding-right: 5.5rem;
  }
`

export const LogoDiv = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  gap: 0.25rem;

  @media(max-width: 480px) {
    flex-direction: column;
    gap: 0.7rem;
  }
`

export const Logo = styled.a`
  color: var(--text-light);
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 19px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const TextLogo = styled.p`
  color: var(--text-light);
  font-size: 1.25rem;
  line-height: 19px;
`

export const CarrinhoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--text-light);
  gap: 1rem;
  padding-top: 0.9rem;
  padding-bottom: 0.8rem;
  padding-left: 0.9rem;
  padding-right: 1.75rem;
  border: none;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const NumeroDeItensDoCarrinho = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`