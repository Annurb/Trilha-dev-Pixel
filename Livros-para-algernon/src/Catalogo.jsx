import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Style/Catalogo.css'
import Card from "./Card";

import { Link } from "react-router-dom";

export default function Catalogo({itens}){
      var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    return(
        <div className='Catalogo'>
            <Slider {...settings}>
              
                   {itens && itens.map((item) =>(
                     <Link
    to={`/livro/${item.id}`}
    key={item.id}
    className='linkCard'
  >
                        <Card image={item.image} name={item.name} autor={item.autor} capa={item.capa} price={item.price}/>
                        </Link>
                 ))}    
                </Slider>
                </div>
    )
}