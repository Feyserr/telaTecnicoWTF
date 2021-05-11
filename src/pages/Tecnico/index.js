import React from 'react'
import App from '../../App'
import './tecnico.css'


const Tecnico = ()=>{
    return (
        
        
        
        <div className="tecnico">

            <div className="tecnico-logo">
               <img 
               src="https://media-exp1.licdn.com/dms/image/C4D0BAQGLrqI03h95OQ/company-logo_200_200/0/1583170451846?e=2159024400&v=beta&t=TACgDEGCIJfii_1_K6SK7sBDLR-wp9jcdgHXme7vgLQ"
               alt = "Tecnico App"
               />
               
           </div>
            <center>Bem vindo Técnico</center>
            <br/>
            <br/>
            <br/>
            <h2>Data da Execução:  11/05/2021 </h2>
            <br/>
            <h2>Tipo de atendimento: 
                <td/>
                 Padrão</h2>
                <br/> 
            <br/>
            <h2>Cliente que foi atendido: <br/>Marcos Raimundo</h2>
            <br/>
            <br/>
            <h2>Observação: <br/>Vai precisar de uma manutenção nos servidores </h2>
            <br/>
            <br/>
            <h2>Técnico que executou o atendimento: <br/>Dener Felipe </h2>
        </div>

    )
}
export default Tecnico;