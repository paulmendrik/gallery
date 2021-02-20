import Meta from 'components/Meta';
import { Row, Col } from 'antd';
import Navigation from 'components/Navigation'
import { urlFor } from 'lib/api';
import { getAllImages } from 'lib/api';



export default function Gallery({ items }) {
  return (
    <>
    <Meta/>
    <Navigation/>
    <Row justify="center" >
    <Col span={20}>
    <div>
    <h1 className="title">Gallery</h1>
    </div>
    <Row className="gallery">
    {items.map(gallery =>
    <Col key={gallery._id} xs={24} sm={8} span={8}>
    <a data-fancybox="gallery" href={urlFor(gallery.image).url()}  data-caption={gallery.details} >
    <figure className="image is-1by1">
   <img src={urlFor(gallery.thumb).size(400,400).url()}  />
   </figure>
    </a>
    </Col>
    )
    }
    </Row>
    </Col>
    </Row>
    </>
  )
 }

 export async function getServerSideProps() {
    const items = await getAllImages();
    return {
      props: {
        items
      }
    }
  }
    