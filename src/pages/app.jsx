import Cabecalho from "@/components/Cabecalho";
import Layout from "@/components/Layout";

export default function App(){
    return(
       <Layout titulo="Exemplo">
            <div>
                <Cabecalho titulo='Next.js e React'/>
                <Cabecalho titulo='Aprenda Next.js na prática'/>
            </div>
       </Layout>
    )
}