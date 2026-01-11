import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Catalogo.css'
import Card from "./Card";

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
                      <Card key ={item.id} image={item.image} name={item.name} autor={item.autor} capa={item.capa} price={item.price}/>
                 ))}    
                </Slider>
                </div>
    )
}