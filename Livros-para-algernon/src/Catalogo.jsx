import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Style/Catalogo.css'
import Card from "./Card";

import { useEffect, useState } from "react";



export default function Catalogo({itens}){
  /*para, quando atualizar a pagina, nao bugar*/
     const getSlides = () => {
    const width = window.innerWidth;

    if (width >= 1300) return 4;
    if (width >= 960) return 3;
    if (width >= 600) return 2;
    return 1;
  };

  const [slides, setSlides] = useState(getSlides());

  useEffect(() => {
    const onResize = () => setSlides(getSlides());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);


      var settings = {
    dots: true,
    infinite: itens.length > 4,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: slides,
          infinite: itens.length > 3
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: slides,
          infinite: itens.length > 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slides,
          infinite: itens.length > 1
        }
      }
    ]
  };
    return(
        <div className='Catalogo'>
            <Slider  {...settings}>
              
                   {itens && itens.map((item) =>(

                        <Card id={item.id} image={item.image} name={item.name} autor={item.autor} capa={item.capa} price={item.price}/>
                     
                 ))}    
                </Slider>
                </div>
    )
}