import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  handleWithdrawal = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cash-withdrawal-container">
        <div className="balance-section">
          <h1 className="balance-label">Sarah Williams</h1>
          <div className="balance-amount">
            <p className="balance-text">Your Balance</p>
            <p className="amount">{balance}</p>
            <p className="currency">In Rupees</p>
          </div>
        </div>
        <div className="withdraw-section">
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(denomination => (
              <DenominationItem
                key={denomination.id}
                denomination={denomination}
                onWithdraw={this.handleWithdrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
