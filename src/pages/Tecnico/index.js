import React from 'react'
import App from '../../App'
import './tecnico.css'


const Tecnico = ()=>{
    return (
        <div className="tecnico">
           <div className="tecnico-logo">
               <img 
               src="https://media-exp1.licdn.com/dms/image/C4D0BAQGLrqI03h95OQ/company-logo_200_200/0/1583170451846?e=2159024400&v=beta&t=TACgDEGCIJfii_1_K6SK7sBDLR-wp9jcdgHXme7vgLQ"
               alt = "Login App"
               />
               
           </div>
            <div className = "tecnico-right">
                <center>Registrar Atendimentos</center>
                
                <div className="tecnico-tecnicoInputExec">
                
                    <input
                    type = "text"
                    placeholder = "Data da Execução*"
                    
                    />

                </div>
                <div className="tecnico-tecnicoInputAt">
            
                    <input
                    type = "text"
                    placeholder = "Tipo de Atendimento*"
    
                    
                    />

                </div>

                <div className="tecnico-tecnicoInputCliente">
            
                    <input
                    type = "text"
                    placeholder = "Cliente que foi atendido*"
    
                    
                    />

                </div>

                <div className="tecnico-tecnicoInputObs">
            
                    <input
                    type = "text"
                    placeholder = "Observação*"
    
                    
                    />

                </div>

                <div className="tecnico-tecnicoInputTecnico">
            
                    <input
                    type = "text"
                    placeholder = "Técnico que executou o atendimento*"
    
                    
                    />

                </div>
                <button type = "submit">
                    Registrar
                </button>
                

            </div>

        </div>


    )
}
export default Tecnico;