import React from 'react';
import classNames from 'classnames';

const Grid = React.createClass({
  displayName: 'ReactBootstrap.Grid',
  propTypes: {
    fluid: React.PropTypes.bool,
    componentClass: React.PropTypes.node.isRequired
  },

  getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render() {
    let ComponentClass = this.props.componentClass;
    let className = this.props.fluid ? 'container-fluid' : 'container';

    return (
      <ComponentClass
        {...this.props}
        className={classNames(this.props.className, className)}>
        {this.props.children}
      </ComponentClass>
    );
  }
});

export default Grid;
