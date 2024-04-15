import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    result: 'heads',
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({result: 'heads'})
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
    } else {
      this.setState({result: 'tails'})
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
      this.setState(prevState => ({totalCount: prevState.totalCount + 1}))
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, result} = this.state
    const imgUrl =
      result === 'heads'
        ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="heading">Heads (or) Tails</p>
          <img className="toss-image" src={imgUrl} alt="toss result" />
          <button type="button" className="toss-btn" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="toss-count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
