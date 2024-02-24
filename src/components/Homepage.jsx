import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link} from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies, News} from '../components'
const {Title} = Typography;

const Homepage = () => {
  const { data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if(isFetching) 
  return 'Loading.....';



  
  return (
    <>
    <p className='htitle '>Global Crypto Stats</p>
    <Row>
      <Col span={12}><Statistic title="Total CryptoCurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total MarketCap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
      
    </Row>
    
    <div className="home-heading-container flex flex-col">
      <h1 className='htitle'>Top 10 CryptoCurrencies in the GAME</h1>
      <Title level={3} className="show bg-black"> <Link to="/cryptocurrencies">Visit all</Link></Title>
    </div>
    <Cryptocurrencies simplified/>
    <div className="home-heading-container">
    <h1 className=' font-extrabold htitle'>Latest Crypto News</h1>
      <Title level={3} className="show"> <Link to="/news">Show More</Link></Title>
    </div>
    <News simplified/>
    </>
  )
}

export default Homepage