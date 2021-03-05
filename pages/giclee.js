import Meta from 'components/Meta';
import { Row, Col } from 'antd';
import Navigation from 'components/Navigation'
import { urlFor } from 'lib/api';
import { getAllGicleePrints } from 'lib/api';


export default function Gallery({ items }) {

    return (
      <>
      <Meta/>
      <Navigation/>
      <Row justify="center" >
      <Col  xs={20} sm={22} span={20}>
      <div>
      <h1 className="title">Limited Edition Giclee Prints</h1>
      </div>
      <Row className="giclee">
      {items.map(giclee =>
      <Col key={giclee._id} xs={24} sm={8} span={8}>
      <a data-fancybox="giclee" href={urlFor(giclee.image).format('webp').url()}  data-caption={giclee.details} >
      <figure className="image is-1by1"><img src={urlFor(giclee.thumb).size(400,400).format('webp').url()} />
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

 export async function getStaticProps(){
    const items = await getAllGicleePrints();
    return {
      props: {
        items
      }
    }
  }
    