import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import aabout from './Images/aabout.jpg';
import about from './Images/about.jpg';

function App() {
    return (
      <div className="containe" id='about'>
        <div className="container ">
        </div>
          <div> <img src="./src/about.jpg" alt="" /> </div>
        <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded contain2">
          <div className="col-md-6 px-0">
            <h1 className="display-5 fst-italic">Some little things about us</h1>
            <p className="lead my-3">Find the tool you need to research career information or training!</p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">Fatbardha Çoçaj</h3>
                <div className="mb-1 text-muted">fc52610@ubt-uni.net</div><br />
                <p className="card-text mb-auto">I'm here to help you figure out  your favorite category, and for any problem you encounter using our platform
                <br/>"Read as much as possible, for an enlightened mind"</p>
              </div>
              <div className="col-auto d-none d-lg-block h-25" width="300" height="210">
                <img src={about} alt="about" height="200" width="150" className='mt-1'></img>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">Endi Haziri</h3>
                <div className="mb-1 text-muted">eh51545@ubt-uni.net</div><br />
                <p className="mb-auto">I am here to help you by giving you different proposals about books for you to find yourself.
                <br/>"Your wish, our work."</p>
              </div>
              <div class="col-auto d-none d-lg-block" width="200" height="150">
                <img src={aabout} alt="aabout" height="200" width="200" className='mt-1'></img>
              </div>
            </div>
          </div>
          </div>
    </main>
    <div className="container">
    <footer className="py-3 my-4">
      
      <p className="text-center text-white">&copy; 2022 Copyrights</p>
    </footer>
  </div>
      </div>
    );
  }
  
  export default App;