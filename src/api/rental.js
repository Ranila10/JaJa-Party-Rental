import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexRentals = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/rentals'
    // headers: {
    //   Authorization: `Bearer ${user.token}`
    // }
  })
}
export const createRental = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/rentals',
    data: {
      rental: data
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const showRental = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/rentals/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const deleteRental = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/rentals/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateRental = (data, id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/rentals/' + id,
    data: {
      event: {
        title: data.title,
        quantity: data.quantity,
        color: data.color,
        price: data.price,
        date: data.date,
        pickup: data.pickup,
        delivery: data.delivery

      }
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
