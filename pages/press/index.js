import { Row, Col } from 'antd';
import Navigation from 'components/Navigation';
import Articles from 'components/Articles';
import groq from 'groq';
import client from 'lib/sanity';

export default function Press(props) {
  const { press = [] } = props

  return (
    <>
    <Navigation/>
    <Row justify="center">
    <Col span={20}>
    <div>
    <h1 className="title">Press</h1>
    </div>
    <Row gutter={16} className="press">
    <>
    <Col xs={24} sm={10} span={10}>
    <img src="/press.svg" width={540} height={540} alt="press" className="press"/> 
    </Col> 
    <Col xs={24} sm={14} span={14}>
    {press.map(({ _id, title = '', slug = '', excerpt = '' }) => 
    slug && (
    <Articles key={_id} title={title} slug={slug} excerpt={excerpt} />
    )
    )}
    </Col>  
    </>
    </Row>
    </Col>
    </Row>
   </>
)
}


Press.getInitialProps = async () => ({
  press: await client.fetch(groq`
    *[_type == "press" ]|order(publishedAt desc)
  `)
})
