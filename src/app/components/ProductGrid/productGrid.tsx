'use client'
import React, { useCallback } from "react";
import { Product } from "../Product/product";
import styled from "styled-components";

interface ProductGridProps {

}

type ProductProps = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}


const produtos: ProductProps[] = [
  {
      id: 1,
      name: 'JBuds Air Wireless',
      brand: 'Apple',
      description: 'Redesigned from scratch and completely revised.',
      price: 100
  },
  {
      id: 2,
      name: 'Apple Macbook Pro',
      brand: 'Apple',
      description: 'Redesigned from scratch and completely revised.',
      price: 300
  },
]

export const PageProductDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--page-color);
`

export const ContentProductsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 1200px;
  padding: 1rem;
`

export function ProductGrid(props: ProductGridProps){
  //const [produtos, setProdutos] = useState([]);

 
  const handleRenderizeProdutos = useCallback(() => {
    return produtos.length !== 0 ? (
      produtos.map(produtos => (
        <Product
          key={produtos.id}
          id={produtos.id}
          name={produtos.name}
          brand={produtos.brand}
          description={produtos.description}
          price={produtos.price}
        />
      ))
    ) : (
    <div>
        <h3>Ops, não há produtos</h3>
    </div>
    );
  }, []);

  return (
    <PageProductDiv>
      <ContentProductsDiv>
        {handleRenderizeProdutos()}
      </ContentProductsDiv>
    </PageProductDiv>
  )
}