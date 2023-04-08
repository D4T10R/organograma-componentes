import './campo.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    placeholderModficado: string
    label: string
    valor: string
    type: string
    obrigatorio: boolean
}

const Campo = ({ aoAlterado, label, obrigatorio, placeholderModficado, type, valor }: CampoTextoProps) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholderModficado}
            /> 
        </div>
    )
}

export default Campo