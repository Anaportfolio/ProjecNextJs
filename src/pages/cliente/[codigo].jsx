import Layout from "@/components/Layout";
import { useRouter } from "next/router";

// Navegação Dinâmica -> colocar o nome do arquivo entre [ ], para a navegação dinâmica 
    // [nome_arquivo.jsx]
export default function ClienteProCodigo(){

    const router = useRouter()

    return(
        <div>
            <Layout titulo="Navegação Dinâmica">
                <span>Código = {router.query.codigo}</span>
            </Layout>
        </div>
    )
}