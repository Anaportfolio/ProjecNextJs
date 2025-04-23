import Layout from '@/components/Layout';
import styles from '../styles/Estiloso_modulo.module.css';


export default function Estiloso(){
    return(
        <Layout titulo="Usando Componentes">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos </h1>
            </div>
        </Layout>
    )
}