import db from '../util/db.js'

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const VisibilityFilter = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLATE: 'SHOW_COMPLATE',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}
export const SET_SELECT = 'SET_SELECT'
export const POST_REQUEST = 'POST_REQUEST'
export const POST_RECIVE = 'POST_RECIVE'
export const INVALIDATE_BOOKS = 'INVALIDATE_BOOKS'

let nextTodoId = 0

export function addTodo(text) {
	return {
		type: ADD_TODO,
		text,
		id: nextTodoId++
	}
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		id
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}

export function setSelect(select) {
	return {
		type: SET_SELECT,
		select
	}
}

export function postRequest(select) {
	return {
		type: POST_REQUEST,
		select
	}
}

export function postRecive(data, select) {
	return {
		type: POST_RECIVE,
		lastUpdate: Date.now(),
		data,
		select
	}
}

export function invalidateBooks(select) {
	return {
		type: INVALIDATE_BOOKS,
		select
	}
}

export function getBooks(select) {
	return dispatch => {
		dispatch(postRequest(select))
		return db.getTodos(select)
				.then(data => {
					dispatch(postRecive(data, select))
				})
	}
}

function shouldFetchBooks(state, select) {
	const books = state.booksBySelect[select]
	if(!books) {
		return true
	} else if(books.isLoading) {
		return false
	} else {
		return books.isValid
	}
} 

export function getBooksIsNeed(select) {
	return (dispatch, getState) => {
		if(shouldFetchBooks(getState(), select)) {
			return dispatch(getBooks(select))
		}
	}
}
