function Login () {
    let correoElectronico = 'Correo electrónico o telefono'
    return(
        <form>
<input value={correoElectronico} type="text"  />
<h4>¿has olvidado tu correo electrónico? </h4> 
        </form>
    );
}
export {Login};