import Link from 'next/link';
import { Row, Col, Button } from 'antd';
import Navigation from 'components/Navigation';
import client from 'lib/sanity';

export default function Press( {data} ) {
 
  return (
    <>
    <Navigation/>
    <Row justify="center">
    <Col  xs={20} sm={22} span={20}>
    <div>
    <h1 className="title">Press</h1>
    </div>
    <Row gutter={16} className="press">
    <>
    <Col xs={24} sm={10} span={10}>
    <img src="/press.svg" width={540} height={540} alt="press" className="press"/> 
    </Col> 
    <Col xs={24} sm={14} span={14} className="press">
    {data.map(press =>  (
      <>
      <h3>{press.title}</h3>
      <p>{press.excerpt}</p>
      <Button><Link href={`/press/${press.slug}`}><a>Read More</a></Link></Button>
      </>
    ))}
    </Col>  
    </>
    </Row>
    </Col>
    </Row>
   </>
)
}


export async function getStaticProps(){
  const data = await client.fetch(`
  *[_type == 'press'] {
    _id,
    'slug': slug.current,
    title,
    excerpt,
  }
`)
return {
  revalidate: 60,
  props: {
    data,
  }
}
}