import react from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';




const Home: NextPage = () => {
  return (
    <div className= "bg-green-500" >
     <p>Pagina index</p>
      <Link href="/adios">
       <a className='cursor-pointer'>ir a adios</a>
       </Link>
    </div>
  );
};

export default Home
