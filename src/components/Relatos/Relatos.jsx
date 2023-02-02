import React from 'react'
import "./relatos.css"

const Relatos = () => {
  return (
    <section id='relatos'>
      <h5>Nicolas Enoque</h5>
      <h2>“Nosso pessoal, aliado as ferramentas são o nosso diferencial” 
        </h2>

      <div className="container relatos_container">
        <article className='relato'>
          {/* <div className="avatar_cliente">
            <img src="" alt="" />
          </div> */}
         <h5 className='nome_cliente'>Pi Project System</h5>
          <small className='review_cliente'>
            "Atende as demandas com maestria"
          </small>
          
          
        </article>
      </div>
      
    </section>
  )
}

export default Relatos