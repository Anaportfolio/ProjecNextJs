import styles from '../styles/Navegador.module.css'
import Link from "next/link"

export default function Navegador(props){
    return(
        <div>
            <Link href={props.destino} className={styles.link}>
                <div className={styles.navegador} style={{
                    backgroundColor: props.cor ?? 'dodgerblue'
                }}>
                    {props.texto}
                </div>
            </Link>
        </div>
    )
}