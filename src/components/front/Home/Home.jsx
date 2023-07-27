// import "./Home.css"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from "../Home/img/Slide-1.jpeg";
import imagem2 from "../Home/img/Slide-2.jpeg";
import imagem3 from "../Home/img/Slide-3.jpeg";

const Home = () => {
  return (
    <div className="Home">
    <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagem1}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagem2}
              alt="Second slide"
            />
    
            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imagem3}
              alt="Third slide"
            />
    
            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
         
        </div>
       
  )
}

export default Home