import { Row, Col, Carousel } from 'antd';
import Navigation from 'components/Navigation';
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from 'lib/api';
import { getExhibitionsPage } from 'lib/api';

export default function About({ page}) {


  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
    cssEase: "linear"
  };

    return (
        <>
        <Navigation/>
        <Row justify="center">
        <Col  xs={20} sm={22} span={20}>
        <div>
        <h1 className="title">Exhibitions</h1>
        </div>
        {page.map(exhibitions =>
        <Col key={exhibitions._id} span={24}> 
        <Row gutter={24}>
        <Col span={10} className="exhibitions">
        <img src={urlFor(exhibitions.image).format('webp').url()} alt={exhibitions.title}  /> 
        <h2>The Great Barn</h2>
        <Carousel {...settings} >
        {exhibitions.slider.map((value, index) => (
        <figure key={exhibitions.slide} className="image is-1by1">
       <img src={exhibitions.slide}  />
       </figure>
        ))}
        
        </Carousel>
        </Col>
        <Col span={14} className="exhibitions">
        <BlockContent blocks={exhibitions.content} />
        </Col>
        </Row>
        </Col>
        )
        }
        </Col>
        </Row>
        </>
    )

}

export async function getStaticProps(){
    const page = await getExhibitionsPage();
    return {
      props: {
        page
      }
    }
  }