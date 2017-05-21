import React, { Component } from 'react';

/**
 * Main application.
 * @extends Component
 */
class Log extends Component {
  /**
   * Render the entries list.
   */
  render() {
    return(
      <div className="entries">
        {this.props.entries.map(function(entry, i) {
          return (
            <p key={i}>
              <strong>{entry.created}</strong> : {entry.message}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Log;
