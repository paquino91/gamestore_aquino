import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee, faDragon, faPerson, faShield, faStar } from '@fortawesome/free-solid-svg-icons'

import ImageSword from "../../assets/img/sword.png";
import ImagePremium from "../../assets/img/premium.png";
import ImageSkins from "../../assets/img/skin.png";

import './NavBar.css';

import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import {tipoObjetos} from '../../helpers/enumeraciones';



const imgNav = process.env.PUBLIC_URL + "/img/navbar.png";
const imgBtn = process.env.PUBLIC_URL + "/img/buttonRed.png";

const styleButton={backgroundImage: `url(${imgBtn})` };
const styleIconTitle = {fontSize:"35px", color:"#f0aa20"};
const styleNavBar = {backgroundImage: `url(${imgNav})`, paddingLeft: "15px", minHeight: "10px" };

const opciones = [
    {desc: 'Premium', img: ImagePremium, lista:[{desc: 'Cuenta premium', url: '/Premium/Cuenta'}, {desc: 'Pases de batalla', url: 'Premium/PaseBatalla'}]},
     {desc: 'Objetos', img: ImageSword, lista:[{desc: 'Armas', url: '/TipoObjeto/' + tipoObjetos.arma}, {desc: 'Conjuros', url: '/TipoObjeto/' + tipoObjetos.conjuros}, {desc: 'Armaduras', url: '/TipoObjeto/' + tipoObjetos.armaduras}, {desc: 'Todos', url: '/TipoObjeto/0'}]},
      {desc: 'Skins', img: ImageSkins, lista:null}
    ];
const configuracion = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = ({children}) => {

    const Logo = () => {
        return(
            <Link to="/">
                <a className="navbar-brand">
                    <FontAwesomeIcon icon={faDragon} style={styleIconTitle} />
                </a>
            </Link>

        )
      };

      const BtnResponsive = () => {
        return(
            <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
                <span className="navbar-toggler-icon"></span>
            </button>
        )
      };

      const HomeTituloSitio = (props) => {
        return(
            <Link to="/">
                <li className="nav-item" style={{paddingRight: "40px"}}>
                    <a className="nav-link text-light font-weight-bold px-3 titleSite" href="#">{props.titulo}</a>
                </li>
            </Link>
        )
      };

      const NavOpcion = (props) => {
        return(
            <li className="nav-item rotateOrigin">
                    <a className="nav-link text-light font-weight-bold px-3" href="#">
                        <img src={props.img} className='rotateTarget' style={{width:"30px", heigth:"30px"}}/>
                            {props.desc}
                    </a>
            </li>
        )
      };

      const NavOpcionDropDown = (props) => {
        return(
        <li className="nav-item dropdown" data-toggle="dropdown">
                <a className="nav-link text-light font-weight-bold px-3 dropdown-toggle rotateOrigin" id={"dropdownMenuButton" + props.index} data-toggle="dropdown" href="#">
                    <img src={props.page.img} className='rotateTarget' style={{width:"40px", heigth:"40px", paddingRight: "5px"}}/>
                    {props.page.desc}
                </a>
            <div className="dropdown-menu" aria-labelledby={"dropdownMenuButton" +props.index}>
                
                {props.page.lista.map((page, index) => 
                    <Link to={page.url} key={index}>
                        <a className="dropdown-item" href="#">{page.desc}</a>
                    </Link>
                )}
            </div>
        
        </li>
        )
      };

    const PerfilUsuario = () => {
    return(          

<div className='ml-1'>
<input type="button" className='buttonNav' value="Ingresar" style={styleButton}   />
</div>
        

)
    }; 


  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark fixed-top" style={styleNavBar}>

    <Logo/>
    <BtnResponsive/>
    
    
    <div className="collapse navbar-collapse justify-content-between" id="nav">
    
    <ul className="navbar-nav">
        <HomeTituloSitio titulo="STORE GAME"/>

    {opciones.map((page, index) => ( page.lista == null ? <NavOpcion key={index} desc={page.desc} img={page.img}/> : <NavOpcionDropDown key={index} page={page} index={index}/> ))}
    </ul>
        <div className='navbar-nav'>
            <li className='nav-item'>{children}</li>
            <li className='nav-item'> <PerfilUsuario/></li>
           
        </div>
    </div>
    
    </nav>
  );
};
export default NavBar;