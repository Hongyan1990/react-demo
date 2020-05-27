import { combineReducers } from 'redux';
import {
	ADD_TODO, 
	TOGGLE_TODO, 
	SET_VISIBILITY_FILTER, 
	VisibilityFilter
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

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp
