import Navegador from "@/components/Navegador"
export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
           <Navegador destino='/estiloso' texto='Estiloso'></Navegador>
           <Navegador destino= '/app' texto='Exemplo' cor="darkviolet"></Navegador>
           <Navegador destino='/jsx' texto='JSX' cor="crimson"></Navegador>
           <Navegador destino='/cliente/123' texto='Navegação Dinâmica' cor='#02695e'></Navegador>
           <Navegador destino='/estado' texto='Componente com estado' cor='pink'></Navegador>
           <Navegador destino='/integracao_1' texto='Integração API#1' cor='yellow'></Navegador>
        </div>
    )
}