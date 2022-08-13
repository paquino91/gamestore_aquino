import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee, faDragon, faPerson, faShield, faStar } from '@fortawesome/free-solid-svg-icons'

import ImageSword from "../../assets/img/sword.png";
import ImagePremium from "../../assets/img/premium.png";
import ImageSkins from "../../assets/img/skin.png";

import './NavBar.css';




const imgNav = process.env.PUBLIC_URL + "/img/navbar.png";
const imgBtn = process.env.PUBLIC_URL + "/img/buttonRed.png";

const styleButton={backgroundImage: `url(${imgBtn})` };
const styleIconTitle = {fontSize:"35px", color:"#f0aa20"};
const styleNavBar = {backgroundImage: `url(${imgNav})`, paddingLeft: "15px", minHeight: "10px" };

const opciones = [
    {desc: 'Premium', img: ImagePremium, lista:[{desc: 'Cuenta premium'}, {desc: 'Pases de batalla'}]},
     {desc: 'Objetos', img: ImageSword, lista:[{desc: 'Armas'}, {desc: 'Conjuros'}, {desc: 'Escudos'}, {desc: 'Vestimentas'}, {desc: 'Otros'}]},
      {desc: 'Skins', img: ImageSkins, lista:null}
    ];
const configuracion = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {

    const Logo = () => {
        return(
            <a className="navbar-brand">
                <FontAwesomeIcon icon={faDragon} style={styleIconTitle} />
            </a>
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
            <li className="nav-item" style={{paddingRight: "40px"}}>
                <a className="nav-link text-light font-weight-bold px-3 titleSite" href="#">{props.titulo}</a>
            </li>
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
                
                {props.page.lista.map((page) => 
                     <a className="dropdown-item" href="#">{page.desc}</a>
                      )}
            </div>
        
        </li>
        )
      };

    const PerfilUsuario = () => {
    return(          

<div className='ml-3'>
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

    {opciones.map((page, index) => ( page.lista == null ? <NavOpcion desc={page.desc} img={page.img}/> : <NavOpcionDropDown page={page} index={index}/> ))}
    

    
    </ul>
    
    

        <PerfilUsuario/>
    
    </div>
    
    </nav>
  );
};
export default NavBar;