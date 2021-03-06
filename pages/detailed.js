import Head from 'next/head'
import React from 'react'
import { Row , Col , Breadcrumb ,Affix} from 'antd'
import {CalendarOutlined , HeartOutlined , FolderOutlined} from '@ant-design/icons'
import Header from '../public/components/Header'
import Auther from '../public/components/Author'
import Footer from "../public/components/Footer"
import Advert from "../public/components/Advert"
import "../public/style/pages/detailed.css"
//markdown解析内容
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import "markdown-navbar/dist/navbar.css"

const Detailed = () => {
  let markdown=
  '# p01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
    return(
      <div>
      <Head>Detailed</Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center"> 
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <div>
                <div className="bread-div">
                  <Breadcrumb>
                    <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/">XXXX</a></Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div>
                    <div className="detailed-title">
                        React实战技术教程更新100级
                    </div>
                    <div className="list-icon center">
                      <span><CalendarOutlined/>2019-06-28</span>
                      <span><FolderOutlined />视频教程</span>
                      <span><HeartOutlined/>50000人</span> 
                    </div>
                    <div className="detailed-content">
                        <ReactMarkdown 
                          source={markdown}
                          escapeHtml={false}
                        />
                    </div>
                </div>
            </div>
          </Col>
          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Auther></Auther>
            <Advert></Advert>
            <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
                <div className="nav-title">文章目录</div>
                <MarkNav 
                  className="article-menu"
                  source={markdown}
                  //是否有编号
                  ordered={false}
                />
            </div>
            </Affix>
          </Col>
      </Row>
      <Footer></Footer>
    </div>
    )
}
   
    
export default Detailed
