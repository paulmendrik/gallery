import Link from 'next/link';
import { Row, Col,Button } from 'antd';
import Navigation from 'components/Navigation';
import groq from 'groq';
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from 'lib/api';
import client from 'lib/sanity';


export default function Article(props) {
  const { title, image, content} = props
    return (
        <>
        <Navigation/>
        <Row justify="center">
        <Col span={20}>
        <div>
        <h1 className="title">{title}</h1>
        </div>
        <Col span={24} className="press">
        <img src={urlFor(image).url()} width={400} height={400} alt={title} />  
        <BlockContent blocks={content} />
        <Button><Link as={`/press/`} href="/press/"><a>Back</a></Link></Button>
        </Col>
        </Col>
        </Row>
        </>
    )

}

const query = groq`*[_type == "press" && slug.current == $slug][0]{
  title,
  image,
  content
}`

Article.getInitialProps = async function(context) {
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}