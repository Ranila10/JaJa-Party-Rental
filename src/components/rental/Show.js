import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { deleteRental, showRental } from '../../api/rental'
import Button from 'react-bootstrap/Button'

class ShowRental extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rental: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props

    showRental(match.params.id, user)
      .then(res => this.setState({ rental: res.data.rental }))
      .then(() => {
        msgAlert({
          heading: 'Show rental success',
          message: 'Yippie! Success!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Show rental failed',
          message: 'Error message: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = () => {
    const { match, user, msgAlert, history } = this.props

    deleteRental(match.params.id, user)
      .then(() => history.push('/'))
      .then(() => {
        msgAlert({
          heading: 'Rental deleted',
          message: 'Yippe! Rental deleted!',
          variant: 'success'
        })
      })
      .catch(error => {
        msgAlert({
          heading: 'Rental deletion failed',
          message: 'Rental Delete Error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    if (this.state.rental === null) {
      return 'loading...'
    }
    //  add owner back in
    const { title, quantity, color, price, date, pickup, delivery, owner } = this.state.rental
    const { user, history, match } = this.props

    return (
      <>
        <h3>Show Rental</h3>
        <h4>{title}</h4>
        <p>Quantity: {quantity}</p>
        <p>Color: {color}</p>
        <p>Price: {price}</p>
        <p>Date: {date}</p>
        <p>Pickup: {pickup}</p>
        <p>Delivery: {delivery}</p>
        {user._id === owner && (
          <>
            <Button onClick={this.handleDelete}>Delete</Button>
            <Button onClick={() => history.push(`/rentals/${match.params.id}/update-rental`)}>Update</Button>
          </>
        )}
      </>
    )
  }
}

// component MUST be wrapped to use withRouter
export default withRouter(ShowRental)
