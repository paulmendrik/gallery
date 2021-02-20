import Link from 'next/link';
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { List, Typography } from 'antd';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';



const Navigation = () => {
    const { Title } = Typography;
    const [visible, setVisible] = useState(false);
    const showDrawer = () => { setVisible(true); };
    const onClose = () => { setVisible(false); };

    return (
    <>
    <Row justify="center">
    <Col span={16}><Title className="logo">Kat Lightfoot</Title></Col>
    <Col span={4} className="menubtn"><Button onClick={showDrawer}><MenuOutlined /></Button></Col>  
    </Row>
    <Drawer placement="right" closable={true} onClose={onClose} visible={visible} >
            
            <Typography.Text><Link href="/">Home</Link></Typography.Text>
            <Typography.Text><Link href="/about">About</Link></Typography.Text>
            <Typography.Text><Link href="/gallery">Gallery</Link></Typography.Text>
            <Typography.Text><Link href="/giclee">Giclee Prints</Link></Typography.Text>
            <Typography.Text><Link href="/canvas">Canvas Prints</Link></Typography.Text>
            <Typography.Text><Link href="/exhibitions">Exhibitions</Link></Typography.Text>
            <Typography.Text><Link href="/press">Press</Link></Typography.Text>
            <Typography.Text><Link href="/contact">Contact</Link></Typography.Text>
            
    </Drawer>
    </>
    )
}

export default Navigation