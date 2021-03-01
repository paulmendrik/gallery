import Link from 'next/link';
import { Row, Col,Button } from 'antd';
import Navigation from 'components/Navigation';
import groq from 'groq';
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from 'lib/api';
import client from 'lib/sanity';


export default function Article({data}) {
    return (
        <>
        <Navigation/>
        <Row justify="center">
        <Col  xs={20} sm={22} span={20}>
        <div>
        <h1 className="title">{data.title}</h1>
        </div>
        <Col span={24} className="press">
        <img src={urlFor(data.image).size(400,400).format('webp').url()} alt={data.title} />  
        <BlockContent blocks={data.content} />
        <Button><Link href="/press"><a>Back</a></Link></Button>
        </Col>
        </Col>
        </Row>
        </>
    )

}

const pressQuery = `
*[_type == 'press' && slug.current == $slug][0] {
  'slug': slug.current,
  title,
   image,
   content,
 }
`

export async function getStaticProps({ params }) {
  const { slug = "" } = params
  const data = await client.fetch(pressQuery, { slug })
  return {
    revalidate: 60,
    props: {
      data,
    }
  }
}

export const getStaticPaths = async () => {
  const paths = await client.fetch(groq`
    *[_type == "press"]{
      "params": { "slug": slug.current }
    }
  `)
  
  return {
    paths,
    fallback: false,
  }
}
