const API_URL = 'http://10.28.6.4:8080/book'
//const API_URL = 'http://localhost:3004/books'

export const get = customer => {
  return fetch(`${API_URL}`, {
    mode: 'cors',
    headers: {
      customer: customer,
    },
  })
    .then(response => {
      return response.json()
    })
    .then(data => {
      return data
    })
    .catch(err => {
      throw err
    })
}

export const getById = (customer, id) => {
  return fetch(`${API_URL}/${id}`, {
    // headers: {
    //   customer: customer,
    // },
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
    .catch(err => {
      throw err
    })
}

export const post = (data, customer) => {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      customer: customer,
    },
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
    .catch(err => {
      throw err
    })
}
export const put = (data, customer, id) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      customer: customer,
    },
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
    .catch(err => {
      throw err
    })
}

export const deleteAction = (id, customer) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      customer: customer,
    },
  })
    .then(res => {
      return res
    })
    .then(data => {
      return data
    })
    .catch(err => {
      throw err
    })
}
