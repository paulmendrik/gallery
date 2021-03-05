import { Row, Col } from 'antd';
import Navigation from 'components/Navigation';
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from 'lib/api';
import { getContactPage } from 'lib/api';

export default function Contact({page}) {
    return (
        <>
        <Navigation/>
        <Row justify="center">
        <Col  xs={20} sm={22} span={20}>
        <div>
        <h1 className="title">Contact</h1>
        </div>
        {page.map(contact =>
        <div key={contact._id}>
        <Row gutter={16} className="contact" > 
        <Col xs={24} sm={10} span={10}>
        <img  src={urlFor(contact.image).size(400,400).format('webp').url()} alt={contact.title}  />  
        </Col>
        <Col xs={24} sm={14} span={14}>
        <BlockContent blocks={contact.content} />
        </Col>
        </Row>
        </div>
        )}
        </Col>
        </Row>
        </>
    )

}

export async function getStaticProps(){
  const page = await getContactPage();
  return {
    props: {
      page
    }
  }
}