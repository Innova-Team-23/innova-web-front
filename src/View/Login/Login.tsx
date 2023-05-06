import React from "react";
import "../../Assets/style/Login.css";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="box">
        <span className="borderLine"></span>
        <form>
            <h2>Se connecter</h2>
            <div className="inputBox">
                <input type="text" required={true} />
                <span>E-mail</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" required={true} />
                <span>Mot de passe</span>
                <i></i>
            </div>
            <div className="links">
                <a href="#">Mot de passe oublier</a>
                <Link to="./Registre">Creér un compte</Link>
            </div>
            <input type="submit" value="Login" />
        </form>
    </div>
  );
}
