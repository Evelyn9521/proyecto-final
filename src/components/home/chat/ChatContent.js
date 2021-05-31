import React from 'react'

export default function ChatContent({contacts, messages}) {

    return (
        <div className=" content divTwoColumns" >
            
            <div className="contactsleft">
                <h2>Contactos</h2>
                <ul >
                    {contacts.map((contact)=> <li className="conectedList">{contact.name}</li>)}
                </ul>
            </div>
                
            <div className="chatrigth ">

                <div className="card-header">
                    <h4 className="card-title"><strong>Chat</strong></h4> 
                </div>
                            
                <div className="cardfixed" >
                    { 
                        messages.map((message)=>{
                        return(
                            <div className="media media-chat chat-reverse">
                                <div className="media-body">
                                    <p>{message.name}</p>
                                    <p>{message.message}</p>
                                    <p className="meta"><time>{message.date}</time></p>
                                </div>
                            </div>
                    
                            )
                        })
                    }
                </div>

                <div className="inputDown"> 
                    <input className="" type="text" placeholder="Escribir un mensaje"/> 
                    <button>Enviar</button>
        
                </div>
    
            </div>
            
        </div>
    )
}

