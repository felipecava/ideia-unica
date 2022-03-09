import Link from 'next/link';
import { useState } from 'react';

function Home() {
    return (
        
        <div>
            <header><h1>Home</h1></header>
            <nav>
                <Link href="/sobre">
                    <a>Sobre</a>
                </Link>
            </nav>
            <main>
                <Contador />
            </main>
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);
    
    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;