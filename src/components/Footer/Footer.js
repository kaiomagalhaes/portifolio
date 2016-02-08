import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© Kaio Magalhães - {new Date().getFullYear()}</span>
        </div>
      </div>
    );
  }

}

export default withStyles(Footer, s);
