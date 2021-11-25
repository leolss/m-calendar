/*
 * @Author: 李闪闪
 * @Date: 2021-11-23 16:27:49
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-11-25 15:58:14
 * @Description: 
 */
import * as React from 'react';
import { Models } from '../date/DataTypes';

export interface PropsType {
  title?: string;
  locale?: Models.Locale;
  showClear?: boolean;
  onCancel?: () => void;
  onClear?: () => void;
  closeIcon?: React.ReactNode;
  clearIcon?: React.ReactNode;
}

export default class Header extends React.PureComponent<PropsType, {}> {
  static defaultProps = {
    closeIcon: 'http://storage.360buyimg.com/jdd-web-yinp/image/icon/close.svg?Expires=3785310776&AccessKey=2pD6LmpoRGa4Z7wB&Signature=H5yJCx0uNxy54vk%2FULwhzn%2BwU9Q%3D',
  };

  render() {
    const {
      title,
      locale = {} as Models.Locale,
      onCancel,
      onClear,
      showClear,
      closeIcon,
      clearIcon,
    } = this.props;

    return (
      <div className="header">
        <img src={closeIcon} className="left" onClick={() => onCancel && onCancel()}/>
        <span className="title">{title || locale.title}</span>
        {
          showClear &&
          <span className="right"
            onClick={() => onClear && onClear()}
          >{clearIcon || locale.clear}</span>
        }
      </div>
    );
  }
}
