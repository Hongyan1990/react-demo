import { combineReducers } from 'redux';
import {
	ADD_TODO, 
	TOGGLE_TODO, 
	SET_VISIBILITY_FILTER, 
	VisibilityFilter,
	SET_SELECT,
	POST_REQUEST,
	POST_RECIVE,
	INVALIDATE_BOOKS
} from './actions.js';

const {SHOW_ALL} = VisibilityFilter;

function todos(state=[], action) {
	switch (action.type) {
		case ADD_TODO: 
			return [
				...state,
				{
					text: action.text,
					complate: false,
					id: action.id
				}
			];
		case TOGGLE_TODO:
			return state.map(todo => {
				if(todo.id === action.id) {
					return Object.assign({}, todo, {
						complate: !todo.complate
					})
				}
				return todo
			});
		default:
			return state;
	} 
}

function visibilityFilter(state=SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER: 
			return action.filter;
		default:
			return state;
	}
}

function currentSelect(state='letter', action) {
	switch (action.type) {
		case SET_SELECT:
			return action.select;
		default:
			return state;
	}
}

function books(state={
	isLoading: false,
	data: []
}, action) {
	switch (action.type) {
		case INVALIDATE_BOOKS:
			return Object.assign({}, state, {
				isValid: true
			})
		case POST_REQUEST:
			return Object.assign({}, state, {
				isLoading: true,
				isValid: false,
				data: []
			});
		case POST_RECIVE:
			return Object.assign({}, state, {
				isLoading: false,
				isValid: false,
				data: action.data,
				lastUpdate: action.lastUpdate
			});
		default:
			return state;
	}
}

function booksBySelect(state={}, action) {
	switch(action.type) {
		case INVALIDATE_BOOKS:
		case POST_RECIVE:
		case POST_REQUEST:
			return Object.assign({}, state, {
				[action.select]: books(state[action.select], action)
			})
		default:
			return state
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos,
	currentSelect,
	booksBySelect
})

export default todoApp
