import React from 'react';
import { Button } from 'antd';

export default ({ children, ...rest }: { children: any }) => (
  <Button {...rest}>{children}</Button>
);
