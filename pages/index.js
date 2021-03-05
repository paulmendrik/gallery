import { Row, Col } from 'antd';
import Navigation from 'components/Navigation'
import { Carousel } from 'antd';
import { urlFor } from 'lib/api';
import { getAllSlides } from 'lib/api';



export default function Home({ items }) {

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,
    cssEase: "linear"
  };

  return (
    <>
    <Navigation/>
      <Row>
      <Col span={24} className="slider">
      <Carousel {...settings}>
      {items.map(slider =>
      <div key={slider.order}>
      <img src={urlFor(slider.slide).width(1200).height(675).format('webp').url()}  layout="fill" />
      </div>
      )
      }
      </Carousel>
      </Col>
      </Row>     
    </>

  )
}


export async function getStaticProps() {
  const items = await getAllSlides();
  return {
    props: {
      items
    }
  }
}
