import React from 'react'
import { Link } from "react-router-dom";
import '../../Assets/style/Client.css'


const Client: React.FC = () => {

    return(
        <section className='contact' id='contact'>
           <div className='row'>
            <form action="row">
                <textarea name="" className='box' placeholder='taper vos rêves' id=''></textarea>
                <input type="submit" value="envoyer vos prédictions" className='btn' />
            </form>
            <div className='col'>
            <textarea name="" className='box' placeholder='taper vos rêves' id=''></textarea>

            </div>

           </div>

        </section>
    )
}

export default Client;
