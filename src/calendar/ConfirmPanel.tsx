/*
 * @Author: 李闪闪
 * @Date: 2021-11-23 16:27:49
 * @Email: lishanshan6@jd.com
 * @LastEditors: 李闪闪
 * @LastEditTime: 2021-11-25 15:47:18
 * @Description: 
 */
import * as React from 'react';
import { formatDate } from '../util';
import { Models } from '../date/DataTypes';

export interface ConfirmPanelPropsType {
  type?: 'one' | 'range';
  locale: Models.Locale;
  onlyConfirm?: boolean;
  disableBtn?: boolean;
  startDateTime?: Date;
  endDateTime?: Date;
  formatStr?: string;
  onConfirm: () => void;
}
export default class ConfirmPanel extends React.PureComponent<ConfirmPanelPropsType, {}> {
  static defaultProps = {
    formatStr: 'yyyy-MM-dd hh:mm'
  } as ConfirmPanelPropsType;


  onConfirm = () => {
    const { onConfirm, disableBtn } = this.props;
    !disableBtn && onConfirm();
  }

  formatDate(date: Date) {
    const { formatStr = '', locale } = this.props;
    return formatDate(date, formatStr, locale);
  }

  render() {
    const { type, locale, disableBtn } = this.props;
    let { startDateTime, endDateTime } = this.props;
    if (startDateTime && endDateTime && +startDateTime > +endDateTime) {
      const tmp = startDateTime;
      startDateTime = endDateTime;
      endDateTime = tmp;
    }

    const startTimeStr = startDateTime ? this.formatDate(startDateTime) : locale.noChoose;
    const endTimeStr = endDateTime ? this.formatDate(endDateTime) : locale.noChoose;
    let btnCls = disableBtn ? 'button button-disable' : 'button';
    if (type === 'one') {
      btnCls += ' button-full';
    }

    return (
      <div className="confirm-panel">
        {/* {
          type === 'range' &&
          <div className="info">
            <p>{locale.start}: <span className={!startDateTime ? 'grey' : ''}>{startTimeStr}</span></p>
            <p>{locale.end}: <span className={!endDateTime ? 'grey' : ''}>{endTimeStr}</span></p>
          </div>
        } */}
        <div className={btnCls} onClick={this.onConfirm}>
          {locale.confirm}
        </div>
      </div>
    );
  }
}
