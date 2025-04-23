import styles from '../styles/Estiloso_modulo.module.css';
import Link from 'next/link';

export default function Estiloso(){
    return(
        <div className={styles.roxo}>
            <h1>Estilo usando Módulos </h1>
            <Link href='/'>Voltar</Link>
        </div>
    )
}