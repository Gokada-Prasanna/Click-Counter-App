import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="countText">{count}</span>{' '}
          times
        </h1>
        <p className="text">Click the button to increase the count!</p>
        <button type="button" onClick={this.onClick} className="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
