import React from 'react';
import classNames from 'classnames';
import BootstrapMixin from './BootstrapMixin';

const Alert = React.createClass({
  displayName: 'ReactBootstrap.Alert',
  mixins: [BootstrapMixin],

  propTypes: {
    onDismiss: React.PropTypes.func,
    dismissAfter: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      bsClass: 'alert',
      bsStyle: 'info'
    };
  },

  renderDismissButton() {
    return (
      <button
        type="button"
        className="close"
        onClick={this.props.onDismiss}
        aria-hidden="true">
        &times;
      </button>
    );
  },

  render() {
    let classes = this.getBsClassSet();
    let isDismissable = !!this.props.onDismiss;

    classes['alert-dismissable'] = isDismissable;

    return (
      <div {...this.props} className={classNames(this.props.className, classes)}>
        {isDismissable ? this.renderDismissButton() : null}
        {this.props.children}
      </div>
    );
  },

  componentDidMount() {
    if (this.props.dismissAfter && this.props.onDismiss) {
      this.dismissTimer = setTimeout(this.props.onDismiss, this.props.dismissAfter);
    }
  },

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }
});

export default Alert;
