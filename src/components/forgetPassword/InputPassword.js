import React from 'react'

export default function InputPassword() {
    return (
        <div className="flexGrow">
            <div>
                <h2 className="colorletters">Recupera tu cuenta</h2>
                <h4 className="colorletters1">Introduce tu correo electrónico y te enviaremos un enlace para que vuelvas a entrar en tu cuenta.</h4>

                <div>
                   
                    <input type="email" className="inputForgetPassword" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
                </div>

                <button className="button4">Enviar enlace de acceso</button>

            </div>
        </div>
    )
}


