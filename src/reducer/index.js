import { ADD_USER, ADD_BOOK, INITIALIZE_STATE, DELETE_BOOK, UPDATE_BOOK } from '../actions'
import { post, deleteAction, put } from '../services'

let initialState = { books: [] }

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_STATE:
      return Object.assign({}, state, { books: action.newState })
    case ADD_USER:
      return Object.assign({}, state, {
        user: action.newUser,
      })
    case ADD_BOOK:
      const book = {
        name: action.newBook.name,
        author: action.newBook.author,
      }
      post(book, action.newBook.customer)
      return Object.assign({}, state, {
        books: [...state.books, action.newBook],
      })
    case DELETE_BOOK:
      let deleteBook = state.books.find(book => book.id === action.book.id)
      let index = state.books.indexOf(deleteBook)
      let newBooks = [...state.books]
      newBooks.splice(index, 1)
      deleteAction(action.book.id, action.book.customer)
      return Object.assign({}, state, { books: newBooks })
    case UPDATE_BOOK:
      console.log(action)
      const newBook = {
        name: action.book.name,
        author: action.book.author,
        id: action.book.id,
      }
      put(newBook, action.book.customer, action.book.id)
      return Object.assign({}, state, state)
    default:
      return state
  }
}

export default Reducer
