import React from 'react';
import classNames from 'classnames';

const Table = React.createClass({
  displayName: 'ReactBootstrap.Table',
  propTypes: {
    striped: React.PropTypes.bool,
    bordered: React.PropTypes.bool,
    condensed: React.PropTypes.bool,
    hover: React.PropTypes.bool,
    responsive: React.PropTypes.bool
  },

  render() {
    let classes = {
      'table': true,
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed,
      'table-hover': this.props.hover
    };
    let table = (
      <table {...this.props} className={classNames(this.props.className, classes)}>
        {this.props.children}
      </table>
    );

    return this.props.responsive ? (
      <div className="table-responsive">
        {table}
      </div>
    ) : table;
  }
});

export default Table;
