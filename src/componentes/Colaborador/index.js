import { IoMdCloseCircleOutline } from 'react-icons/io'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
 
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function trocaFavorito() {
        aoFavoritar(colaborador.id)
    }

    return (<div className="colaborador">
        <IoMdCloseCircleOutline  
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)} 
        /> 
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar' onClick={trocaFavorito}>
                {colaborador.favorito 
                    ? <AiFillHeart /> 
                    : < AiOutlineHeart 
                />}
            </div>
        </div>
    </div>)
}

export default Colaborador