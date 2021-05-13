import React from "react";
import { Container, Para, Title, Display } from "./SfaturiSec.style";
import PropTypes from "prop-types";

export default class SfaturiSec extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    defaultActive: PropTypes.number,
  };

  static Item({ title, children }) {
    return (
      <div style={{ cursor: "pointer" }}>
        <Title>{title}</Title>
        <Display className="body">
          <Para>{children}</Para>
        </Display>
      </div>
    );
  }

  state = {
    active: this.props.defaultActive || 0,
  };

  render() {
    const { items } = this.props;

    return (
      <div className="accordeon">{items && items.map(this._renderItem)}</div>
    );
  }

  _renderItem = (item, idx) => {
    let { active } = this.state;
    return (
      <div
        className={`box ${idx === active ? "active" : ""}`}
        onClick={() => this._handleClickTitle(idx)}
      >
        <Container>{item}</Container>
      </div>
    );
  };

  _handleClickTitle = (idx) => {
    this.setState((state) => ({
      ...state,
      active: state.active === idx ? undefined : idx,
    }));
  };
}
