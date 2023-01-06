import React, { useLayoutEffect, useState } from 'react';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTER_PATH } from 'src/constants';
import { MenuCardStyle } from './MenuCard.style';

const MenuCard: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const [selectedMenu, setSelectedMenu] = useState<string[]>([]);

  const MENU = [
    {
      key: ROUTER_PATH.DASHBOARD.KEY,
      icon: <UploadOutlined />,
      label: <Link to={ROUTER_PATH.DASHBOARD.PATH}>{t('private.menu.dashboard')}</Link>,
      path: ROUTER_PATH.DASHBOARD.PATH,
    },
    {
      key: ROUTER_PATH.ACCOUNT.KEY,
      icon: <UserOutlined />,
      label: <Link to={ROUTER_PATH.ACCOUNT.PATH}>{t('private.menu.account')}</Link>,
      path: ROUTER_PATH.ACCOUNT.PATH,
    },
  ];

  useLayoutEffect(() => {
    const selected = MENU.filter(item => item.path === location.pathname || item.path === '/').map(item => item.key);

    setSelectedMenu(selected);
  }, [location.pathname]);

  return <MenuCardStyle className="layout-menu" mode="inline" selectedKeys={selectedMenu} items={MENU} />;
};

export default MenuCard;
