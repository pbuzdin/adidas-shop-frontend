import React, {Component} from 'react';


class Img extends Component {
  state = {}
  handleClick() {
    this.setState({
      isOpened: true
    });
  }

render () {
  return (
    <div>
    {this.state.isOpened &&
      <button
        onClick={this.handleClick}
        >open</button>
    }
      {this.state.isOpened &&
        <img
          src={this.props.arc}
          alt={this.props.alt}
          />
      }
    </div>

  );
}
}