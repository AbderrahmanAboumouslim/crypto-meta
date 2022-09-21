import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import Logo from '../assets/unnamed.png';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const size = setScreenSize(window.innerWidth);
    window.addEventListener('resize', size);

    return window.addEventListener('resize', size);
  }, []);

  useEffect(() => {
    if (screenSize >= 768) {
      setIsMobile(false);
    } else if (screenSize < 768) {
      setIsMobile(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={Logo} />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoMeta</Link>
        </Typography.Title>
      </div>

      {!isMobile && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptos">Cryptos</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
