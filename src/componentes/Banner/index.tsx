import './banner.css'

import React from 'react'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
    return (
        <header className="cabecalho">
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    )
}

// <img src='/imagens/banner.png' alt='Logo do Organo'/>

export default Banner