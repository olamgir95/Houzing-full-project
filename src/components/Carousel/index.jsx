import React, { useRef } from "react";
import { Arrow, Blur, Container, Img, Content,Details, Icons } from "./style";
import { Carousel } from "antd";
import img1 from "..//..//assets/imgs/carousel1.png"
import img2 from "..//..//assets/imgs/carousel2.png"




const GenericCarousel = () => {
  const slider = useRef();


  const onChange = (currentSlide) => {
    
  };
  const onMove = ({ 
    target: {
      dataset: {name }
     },
    }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
      <Img src={img1}/>
      <Img src={img2}/>
      <Img src={img1}/>
      </Carousel>
      <Blur/>
      <Content>
        <Content.Title>
        Skyper Pool Partment
        </Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Details>
          <Details.Item>
            <Icons.Bed  />
            <div className='info'>Bed {12}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className='info'>Bath {2}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className='info'>Garage {2} </div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className='info'>Area {212}kv</div>
          </Details.Item>
        </Details>
        <h1 className="subTitle">$5,250/mo</h1>
      </Content>
      <Arrow onClick={onMove} right='true' data-name="right"  />
      <Arrow onClick={onMove} left='true' data-name="left"  />
    </Container>
  );
};

export default GenericCarousel;
