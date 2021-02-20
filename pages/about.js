import { Row, Col } from 'antd';
import Navigation from 'components/Navigation';
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from 'lib/api';
import { getAboutPage } from 'lib/api';

export default function About({page}) {
    return (
        <>
        <Navigation/>
        <Row justify="center">
        <Col span={20}>
        <div>
        <h1 className="title">About</h1>
        </div>
        <Col span={24} className="about"> 
        {page.map(about =>
        <div key={about._id}>
        <img  src={urlFor(about.image).url()} alt={about.title} />  
        <BlockContent blocks={about.content} />
        </div>
        )}
        </Col>
        </Col>
        </Row>
        </>
    )

}
export async function getServerSideProps(){
  const page = await getAboutPage();
  return {
    props: {
      page
    }
  }
}