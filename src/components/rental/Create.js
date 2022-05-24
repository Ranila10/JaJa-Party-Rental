import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { withRouter } from 'react-router-dom'

// import RentalForm from '../shared/RentalForm'

import { createRental } from '../../api/rental'

class CreateRental extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      quantity: '',
      color: '',
      price: '',
      date: '',
      pickup: '',
      delivery: ''
    }
  }

  handleChange = (rental) => {
    // The rental.target of this rental will be an input element
    // Which will have a `name` attribute (key in the state) & a `value` (what the user typed)
    this.setState({ [rental.target.name]: rental.target.value })
  }

  handleSubmit = (rental) => {
    rental.preventDefault()
    // add history below to do the push
    const { user, msgAlert, history } = this.props

    createRental(this.state, user)
      .then(res => history.push('/rentals/' + res.data.rental._id))
      .then(() => msgAlert({ heading: 'Rental Created!', message: 'Party Time!', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Rental creation failed :(',
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
            placeholder='Rental title'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='quantity'>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            required
            name='quantity'
            type='number'
            value={this.state.location}
            placeholder='Quantity'
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
            placeholder='Rental Color'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='price'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            required
            name='price'
            type='$'
            value={this.state.price}
            placeholder='Rental Price'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='date'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            name='date'
            type='date'
            value={this.state.date}
            placeholder='Rental Date'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='pickup'>
          <Form.Label>Pickup</Form.Label>
          <Form.Control
            required
            name='pickup'
            type='city'
            value={this.state.pickup}
            placeholder='Rental Pickup'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId='delivery'>
          <Form.Label>Delivery</Form.Label>
          <Form.Control
            required
            name='delivery'
            type='city'
            value={this.state.delivery}
            placeholder='Rental Delivery'
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
// add withRouter() when doing the history push above
export default withRouter(CreateRental)
