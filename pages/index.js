import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1>Olá Mundo!!!</h1>
  
      <Link href="/users">Usuários</Link>
    </div>
  );
}

export default Home;