import React from 'react'
import {Provider} from 'react-redux';

import createMyStore from '../store/store.js';
import AsyncBooks from './containers/AsyncBooks.js'

const store = createMyStore()

function MyBooks() {
	return (
		<Provider store={store}>
			<AsyncBooks />
		</Provider>
	)
}

export default MyBooks