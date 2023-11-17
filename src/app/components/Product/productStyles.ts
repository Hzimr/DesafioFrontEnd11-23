import styled from "styled-components";

export const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: 8px;
  background-color: var(--white-color);
`

export const ProductImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 170px;
  padding: 1.125rem;
`

export const ProductNameAndPrice = styled.section`
  display: flex;
  flex-direction: row;
`

export const ProductNameSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0.875rem;
`

export const NameText = styled.p`
  font-size: 1rem;
  line-height: 19px;
  color: var(--text-dark);
  align-text: left;
`

export const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  background-color: var(--black-color);
  border-radius: 5px;
`

export const PriceText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-light);
`

export const DescriptionText = styled.p`
  font-size: 0.6rem;
  font-weight: 300;
  color: var(--text-dark);
  padding: 0.875rem;
`

export const ComprarButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 0.875rem;
  padding: 0.6rem 0.3rem;
  background-color: var(--primary-color);
  border: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`


export const ButtonText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-weight: 18px;
  color: var(--text-light);

`