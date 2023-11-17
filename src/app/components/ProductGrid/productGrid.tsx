'use client'
import React, {useCallback} from "react";
import { Product } from "../Product/product";

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

export function ProductGrid(props: ProductGridProps){
  
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
    <div>
      <div>
        {handleRenderizeProdutos()}
      </div>
    </div>
  )
}