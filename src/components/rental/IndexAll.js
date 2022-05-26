import React, { Component } from 'react'
import { indexAllRentals } from '../../api/rental'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class IndexAllRentals extends Component {
  constructor (props) {
    super(props)

    this.state = {
      rentals: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    if (user) {
      indexAllRentals(user)
        .then((res) => this.setState({ rentals: res.data.rentals }))
        .then(() => {
          msgAlert({
            heading: 'Index Success',
            message: 'Just indexed All!',
            variant: 'success'
          })
        })
        .catch(error => {
          msgAlert({
            heading: 'Index Failed',
            message: 'Index Error: ' + error.message,
            variant: 'danger'
          })
        })
    }
  }

  render () {
    const { rentals } = this.state
    const { userOnly, user } = this.props

    if (rentals === null) {
      return 'Loading...'
    }

    let rentalsJSX
    // checking if there are no events in the entire app
    if (rentals.length === 0) {
      rentalsJSX = 'No rentals, create your package'
      // checking if user is not logged-in
    } if (user === null) {
      rentalsJSX = rentals.map((rental) => (
        <Col key={rental._id}>
          <Card border="secondary">
            <Card.Header>
              <Link
                to={'/sign-in'}>
                {rental.title}
              </Link>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {rental.quantity}
              </Card.Title>
              <Card.Subtitle>
                {rental.color} at {rental.price}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))
      // checking if userOnly prop is true
    } else if (userOnly) {
      // filtering rentals then mapping through the rental where owner is equal to user id
      rentalsJSX = rentals.filter(rental => rental.owner === user._id).map(rental => (
        <Col key={rental._id}>
          <Card border="secondary">
            <Card.Header>
              <Link
                to={`/rentals/${rental._id}`}>
                {rental.title}
              </Link>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {rental.quantity}
              </Card.Title>
              <Card.Subtitle>
                {rental.color} at {rental.price}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))
      // checking if user has no rentals
      if (rentalsJSX.length === 0) {
        rentalsJSX = 'You have not created any rentals, create your package'
      }
      // mapping through rentals if userOnly is false
    } else {
      rentalsJSX = rentals.map((rental) => (
        <Col key={rental._id}>
          <Card border="secondary">
            <Card.Header>
              <Link
                to={`/rentals/${rental._id}`}>
                {rental.title}
              </Link>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {rental.quantity}
              </Card.Title>
              <Card.Subtitle>
                {rental.color} at {rental.price}
                {rental.date} at {rental.pickup}
                {rental.delivery}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      ))
    }

    return (
      <>
        <h3>{userOnly ? 'My rentals:' : 'All the rentals:'}</h3>
        <Row xs={1} md={3} className="g-4">
          {rentalsJSX}
        </Row>
      </>
    )
  }
}

export default IndexAllRentals
