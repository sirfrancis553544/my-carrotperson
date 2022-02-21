import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, 
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, 
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, 
  },
};
const sliderImageUrl = [
  {
    url: "https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/2239.png",
  },
  {
    url: "https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/2625.png",
  },
  {
    url: "https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/3315.png",
  },
  {
    url: "https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/3623.png",
  },
  {
    url: "https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/5937.png",
  },

  {
    url: "https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/6579.png",
  },

  {
    url: "https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/8043.png",
  },

  {
    url: "https://bafybeihqy23votfihobdo2jaiw2rh2y6vl5iuyvepygvhr3w5d4gzgexbu.ipfs.dweb.link/8442.png",
  },
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="CarrotPerson" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
