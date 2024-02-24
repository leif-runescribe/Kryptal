import React from 'react'
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';

import { useGetNewsQuery } from '../services/NewsApi';

const {Text, Title} = Typography;
const {Option} = Select;

const News = ({simplified}) => {
  const { data: cryptoNews} = useGetNewsQuery({newsCat: 'india', count: simplified ? 10: 100})

  if(!cryptoNews?.articles) return "Loading..."

// Now cryptoNewsArray is an array of news articles


  console.log(cryptoNews);
  return (
    <div>
      <h1 className=' font-extrabold htitle'>Latest Crypto News</h1>
      
    <Row gutter={[24,24]}>
      {cryptoNews.articles.map((news,i)=>(
      <Col xs={24} sm={12} lg={8} key={i}>
        <Card hoverable className='news ccard '>
          <a href={news.url} target="_blank">
          <div className='news'>
            <Title className='news' level={4}>{news.content}</Title>

          </div>
          </a>
        </Card>
      </Col>
      ))}
      
    </Row>
    </div>
    
  )
}

export default News