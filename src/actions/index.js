export const ADD_USER = 'ADD_USER'
export const ADD_BOOK = 'ADD_BOOK'
export const INITIALIZE_STATE = 'INITIALIZE_STATE'
export const DELETE_BOOK = 'DELETE_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const add_user = () => {
  return {
    type: ADD_USER,
  }
}

export const add_book = () => {
  return {
    type: ADD_USER,
  }
}

export const initialize_state = newState => {
  return {
    type: INITIALIZE_STATE,
    newState,
  }
}

export const deleteBook = book => {
  return {
    type: DELETE_BOOK,
    book,
  }
}
export const updateBook = book => {
  return {
    type: DELETE_BOOK,
    book,
  }
}
