import Link from 'next/link';
import styles from '../../styles/ninjas.module.css';
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props : {ninjas : data}
    };
} 
const Ninjas = ({ninjas}) => {
    return ( 
        <div className={styles.ninjas}>
            <h1>Ninjas:</h1>
            <div className={styles.ninjasNames}>
            {ninjas.map((ninja) => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <a>
                            <h2>{ninja.name}</h2>
                        </a>                
                </Link>
                ))}
            </div>
        </div>
    );
}

export default Ninjas;