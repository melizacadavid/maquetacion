import {Imagen} from "./Imagen";
import {TextoUno} from "./TextoUno";
import {Login} from "../src/components/layouts/auth/Login";
import {TextoDos} from "./TextoDos";
import {Botones} from "./Botones";



function App() {

return (
    <div className="container">
    <Imagen/>
    <TextoUno/>

    <Login/>
    <TextoDos/>
    <Botones/>
    </div>
    
  );
}

export {App};


