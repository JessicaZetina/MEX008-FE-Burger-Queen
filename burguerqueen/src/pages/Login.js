import React from 'react';
import { Button } from 'reactstrap';
import mesereando from "../imgFED/mesereando.png"



const Login=()=>{
    return(
    <seccion className={"login"}>
      <div>
        <img className="img-log" src={mesereando}/>
      <Button className="btn-login" color="secondary">INICIAR SESIÓN</Button>
        </div>
     </seccion>
     );
}
export default Login;