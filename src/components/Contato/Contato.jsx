import React from 'react';
import "./contato.css";
import {MdOutlineEmail} from "react-icons/md";
import {ImWhatsapp} from "react-icons/im";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_992g70m', 'template_15jqxzl', form.current, 'ApJ85QhPmPiv9yzHY')
    toast.success("MENSAGEM ENVIADA COM SUCESSO!!!")
    e.target.reset();
   

  };

  return (
    <section id='contato'>
      <h5> Fale Comigo!</h5>
      <h2>Entre em Contato</h2>

      <div className="container container_contato">
        <div className="opcoes_contato">

          <article className="opcao_contato">
            <MdOutlineEmail className='opcao_contato-icone'/>
            <h4>E-mail</h4>
            <h5>nicolasenoque0@gmail.com</h5>
            <a href='mailto:nicolasenoque0@gmail.com' target="_blank">Fale comigo</a>
          </article>

          <article className="opcao_contato">
            <ImWhatsapp className='opcao_contato-icone'/>
            <h4>WhatsApp</h4>
            <h5>(+55) 11 97543-4884</h5>
            <a href='https://api.whatsapp.com/send?phone=5511975434884' target="_blank">Entre em contato
            </a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome Completo' required/>
          <input type="email" name="email" placeholder='Seu e-mail'/>
          <textarea name="message" rows="10" placeholder='Digite sua mensagem' required></textarea>
          <button type="submit" className='btn btn_envio'>Enviar mensagem</button>
        </form>
      </div>

    </section>
  )
}

export default Contato