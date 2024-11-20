import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const GallerySection = styled.section`
    padding: 50px;
    background: #000;
    color: #fff;
    text-align: center;
`;

const Slide = styled.div`
    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }
`;

const Gallery = () => {
    const settings = {
        dots: true,
        infitine: true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
    };

    return (
        <GallerySection>
            <h2>Gallery</h2>
            <Slider {...settings}>
                <Slide>
                    <img src="/Ferell-Bottle.png" alt="ferell bottle"/>
                </Slide>
                <Slide>
                    <img src="/Ferell-boost.webp" alt="Ferell boosts creativity" />
                </Slide>
                <Slide>
                    <img src="/ferell-cans.webp" alt="depicts ferells multiple cans"/>
                </Slide>
                <Slide>
                    <img src="/bauhaus-ferell.webp" alt="creative image of bauhaus style with ferell"/>
                </Slide>
                <Slide>
                    <img src="/ferell-can.webp" alt="depicts on special can of ferell"/>
                </Slide>
            </Slider>
        </GallerySection>
    ); 
};

export default Gallery;

