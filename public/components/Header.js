import React from 'react'
import '../../public/style/components/Header.css'
import {Row , Col , Menu } from 'antd'
import Head from 'next/head'
import {HomeOutlined , CreditCardOutlined , SmileOutlined} from '@ant-design/icons'

const Header = ()=>(
    <div className='header'>
        <Row type='flex'  justify='center'>
            <Col xs={24} sm={24} md={10} lg={15} xl={12}> 
                <span className="header-logo">技术程</span>
                <span className="header-text">一个前端小菜鸟的博客</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <CreditCardOutlined />
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        <SmileOutlined />
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)
export default Header