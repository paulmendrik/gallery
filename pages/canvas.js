import Meta from 'components/Meta';
import { Row, Col } from 'antd';
import Navigation from 'components/Navigation'
import { urlFor } from 'lib/api';
import { getAllPrints } from 'lib/api';


export default function Gallery({ items }) {

    return (
      <>
      <Meta/>
      <Navigation/>
      <Row justify="center" >
      <Col span={20}>
      <div className="title">
      <h1 className="title">Canvas Prints</h1>
      <h2 className="subtitle">The canvas prints are all hand finished and signed in oil</h2>
      </div>
      <Row className="canvas">
      {items.map(prints =>
      <Col key={prints._id} xs={24} sm={8} span={8}>
      <a data-fancybox="prints" href={urlFor(prints.image).url()}  data-caption={prints.details} >
      <figure className="image is-1by1"><img src={urlFor(prints.thumb).size(400,400).url()} />
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
    const items = await getAllPrints();
    return {
      props: {
        items
      }
    }
  }
    