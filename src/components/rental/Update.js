import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// API request
import { updateRental, showRental } from '../../api/rental'
// import MovieForm from '../shared/MovieForm'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class UpdateRental extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      quantity: '',
      color: '',
      price: '',
      date: '',
      pickup: '',
      delivery: '',
      owner: ''
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showRental(match.params.id, user)
      .then(res => this.setState({ rental: res.data.rental }))
      .then(() => msgAlert({
        heading: 'Show rental success',
        message: 'Check out the rental',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Show rental failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      }))
  }

  // handleChange = (event) => {
  //   // because `this.state.movie` is an object with multiple keys, we have to do some fancy updating
  //   const userInput = { [event.target.name]: event.target.value }
  //   this.setState(currState => {
  //     // "Spread" out current movie state key/value pairs, then add the new one at the end
  //     // this will override the old key/value pair in the state but leave the others untouched
  //     return { event: { ...currState.event, ...userInput } }
  //   })
  // }
  handleChange = (rental) =>
    this.setState({
      [rental.target.name]: rental.target.value
    })

    handleSubmit = (rental) => {
      rental.preventDefault()

      const { user, msgAlert, history, match } = this.props

      updateRental(this.state, match.params.id, user)
        .then(res => history.push('/rentals/' + match.params.id))
        .then(() => msgAlert({ heading: 'Rental Updated!', message: 'Nice work, go check out your package.', variant: 'success' }))
        .catch(err => {
          msgAlert({
            heading: 'Rental update failed :(',
            message: 'Something went wrong: ' + err.message,
            variant: 'danger'
          })
        })
    }

    render () {
      return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Rental Title</Form.Label>
            <Form.Control
              required
              name='title'
              value={this.state.title}
              placeholder={this.state.rental?.title}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='quantity'>
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              required
              name='quantity'
              value={this.state.quantity}
              placeholder={this.state.rental?.quantity}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='color'>
            <Form.Label>Color</Form.Label>
            <Form.Control
              required
              name='color'
              type='color'
              value={this.state.color}
              placeholder={this.state.rental?.color}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='price'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              name='price'
              value={this.state.price}
              placeholder={this.state.rental?.price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='data'>
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              name='date'
              value={this.state.date}
              placeholder={this.state.rental?.date}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='pickup'>
            <Form.Label>Pickup</Form.Label>
            <Form.Control
              required
              name='pickup'
              value={this.state.pickup}
              placeholder={this.state.rental?.pickup}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='delivery'>
            <Form.Label>Delivery</Form.Label>
            <Form.Control
              required
              name='delivery'
              value={this.state.delivery}
              placeholder={this.state.rental?.delivery}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      )
    }
}

export default withRouter(UpdateRental)
