'use client'

import * as FooterItems from "./footerStyles"

interface FooterProps {

}

export function Footer(props: FooterProps){
  return (
    <FooterItems.TagFooter title="rodapé">
      <FooterItems.ContentFooter>
        <FooterItems.FooterText>
          MKS sistemas © Todos os direitos reservados
        </FooterItems.FooterText>
      </FooterItems.ContentFooter>
    </FooterItems.TagFooter>
  )
}