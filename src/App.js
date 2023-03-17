import logo from "./asset/logo.png";
import youtube from "./asset/youtube.png"
import line from "./asset/line.png"
import twitter from "./asset/twitter.png"
import tiktok from "./asset/tiktok.png"
import instagram from "./asset/instagram.png"
import "./style/page.css"

function App() {
  return (
    <div className='Container'>
  <div className='Container-gradien '>
    <nav class="navigation-bar navbar navbar-expand-lg navbar-light  rounded-bottom">
      <div class="container-fluid">
        <div class="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="75" height="75" />
          
        </div>
      </div>
    </nav>
    <div class="background" >
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1>COMING SOON!</h1>
            <h2>ANANDITA NARAYA 2023</h2>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer rounded-top py-1">
      <div class="container">
        <div class="row">
          <div class="col-md-4 align-item-center mt-3">
            <p className="text-left">© 2023 KBMDSI UB</p>
          </div>
          <div class="col-md-8 mt-3">
            <ul class="list-inline text-right logo-link">
              <li class="list-inline-item ">
                <a className="logo-link" href="#">
                  <img className="mr-2" src={instagram} width="20" height="20" />
                  <img className="mr-2" src={tiktok} width="20" height="20" />
                  <span class="d-none d-md-inline">@kbmdsi.ub</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a className="logo-link" href="#">
                  <img className="mr-2" src={twitter} width="20" height="20" />
                  <span class="d-none d-md-inline">@KBMDSI_UB</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a className="logo-link" href="#">
                  <img className="mr-2" src={line} width="20" height="20" />
                  <span class="d-none d-md-inline">@846rzynr</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a className="logo-link" href="#">
                  <img className="mr-2" src={youtube} width="25" height="20" />
                  <span class="d-none d-md-inline">KBMDSI UB</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>



  );
}

export default App;
