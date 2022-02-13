import React, {useRef, useEffect} from 'react'

const useMountEffect = fun => useEffect(fun, []);

export const Error404 = () => {


const principal = useRef(null);


  const executeScroll = () => principal.current.scrollIntoView(false);


  useMountEffect(executeScroll);

  return (
    <>
      <main className='error404' ref={principal}>
        <h1 className='text-center'>Error404</h1>
        <h3 className='text-center'>Página no encontrada</h3>


      </main>
    </>
  )
}
