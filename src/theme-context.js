import React from 'react';

export const theme = {
	light: {
    	background: '#eeeeee',
	},
	dark: {
	    background: '#222222',
	},
}

export const ThemeContext = React.createContext({
	theme: theme.dark,
	toggleTheme: () => {console.log(123)}
})
