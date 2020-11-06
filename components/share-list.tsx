import React from 'react';
import { Card } from 'antd';
import './index.less';

export default ({ data, style }: any) => {
  return (
    <Card bordered={false}>
      {data.map(({ name, link, logo }: any) => {
        return (
          <Card.Grid key={name} className="card-grid" style={style}>
            <a
              style={{ display: 'block', padding: 20 }}
              target="_blank"
              href={link}
            >
              <img
                width="32"
                style={{ verticalAlign: '-0.32em', marginRight: 8 }}
                src={logo}
              />
              {name}
            </a>
          </Card.Grid>
        );
      })}
    </Card>
  );
};
