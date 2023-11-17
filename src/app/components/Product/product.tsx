'use client'
import { FiShoppingBag } from "react-icons/fi";

import { Montserrat } from 'next/font/google'

//components
import * as ProductComponents from './productStyles'

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'] })

type ProductProps = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

export function Product({ id, name, brand, description, price }: ProductProps) {
  return (
    <ProductComponents.ProductDiv key={id}>
      <ProductComponents.ProductImg>
        Imagem Aqui
      </ProductComponents.ProductImg>
      <ProductComponents.ProductNameAndPrice>
        <ProductComponents.ProductNameSection>
          <ProductComponents.NameText>{name}</ProductComponents.NameText>
          {/*<p>Brand: {brand}</p>*/}
        </ProductComponents.ProductNameSection>
        <ProductComponents.PriceDiv>
          <ProductComponents.PriceText>R${price}</ProductComponents.PriceText>
        </ProductComponents.PriceDiv>
      </ProductComponents.ProductNameAndPrice>
      <ProductComponents.DescriptionText>{description}</ProductComponents.DescriptionText>
      <ProductComponents.ComprarButton>
        <FiShoppingBag size={16} color="white"/>
        <ProductComponents.ButtonText className={montserrat.className}>
          COMPRAR
        </ProductComponents.ButtonText>
      </ProductComponents.ComprarButton>     
    </ProductComponents.ProductDiv>
  );
}
