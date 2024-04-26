import { useEffect } from 'react'
import '../../style.css'
import { Link } from 'react-router-dom';

export default function NotFound() {

    useEffect(() => {
        const contPrincipal = document.querySelector('.cont_principal');
        if (contPrincipal) {
          contPrincipal.classList.add("cont_error_active");
        }
    }, []);

    return (
        <>
            <div className="cont_principal">
                <div className="cont_error">
                    <h1 className='title-404'>Oops 404!</h1>  
                    <p className='parraf-404'>The Page you're looking for isn't here.</p>
                    <p className='parraf-404'><Link to={'/'} >Volver a Iniciar Sesion</Link></p>
                </div>
                <div className="cont_aura_1"></div>
                <div className="cont_aura_2"></div>
            </div>
        </>
    )
}
