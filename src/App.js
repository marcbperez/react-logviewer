import React, { Component } from 'react';
import Log from './Log'
import './App.css';

/**
 * Main application.
 * @extends Component
 */
class App extends Component {
  /**
   * Initialize the application.
   * @param {Object} props - The application props.
   */
  constructor(props) {
    super(props);

    this.state = {
      entries: Array(0),
    };

    this.updateEntries = this.updateEntries.bind(this);
    this.props.service.getEntries(this.updateEntries)
  }

  /**
   * Update entries.
   * @param {Object} data - The data to update from.
   */
  updateEntries(data) {
    this.setState({
      entries: data.slice()
    });
  }

  /**
   * Render the main application.
   */
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <h2>React Log Viewer</h2>
        </div>
        <div className="app-content">
          <Log entries={this.state.entries} />
        </div>
      </div>
    );
  }
}

export default App;
