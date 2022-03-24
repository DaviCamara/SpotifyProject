import { CurrentDate, getCurrentDate } from '../utils/CurrentDate';
import './Footer.css'
//import {getCurrentDate} from '../utils'
function Footer(){
    return(
        <footer className="myFooter bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <h2 className="logo"><a href="-"> Spotify </a></h2>
            </div>
            <div className="col-sm-2">
              <h5>EMPRESA</h5>
              <ul>
                <li><a href="">Sobre</a></li>
                <li><a href="">Empregos</a></li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>COMUNIDADE</h5>
              <ul>
                <li><a href="">Para Artistas</a></li>
                <li><a href="">Desenvolvedores</a></li>
                <li><a href="">Publicidade</a></li>
                <li><a href="">Investidores</a></li>
                <li><a href="">Fornecedores</a></li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>SUPORTE</h5>
              <ul>
                <li><a href="./FAQ.html">FAQ</a></li>
                <li><a href="">Telefones</a></li>
                <li><a href="">Chat</a></li>
              </ul>
            </div>
            <div className="col-sm-3">
              <div className="social-networks">
                <a href="-" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="-" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="-" className="instagram"><i className="fa fa-instagram"></i></a>
              </div>
              <a>
                <button className="button btn btn-default">Contato</button>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© {getCurrentDate()} Copyright - Spotify</p>
        </div>
      </footer>
    );
    }
    
    export default Footer;
    console.log(getCurrentDate())