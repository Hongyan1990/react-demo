const sha1 = require('sha1')
const axios = require('axios')

const config = require('./app.config.js')
const appId = config.db.appId
const appKey = config.db.appKey

const request = axios.create({
	baseURL: 'https://d.apicloud.com/mcm/api'
})

const getHeaders = () => {
	const now = Date.now()
	return {
		'X-APICloud-AppId': appId,
    	'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
	}
}


module.exports = {
	getTodos(url) {
		return new Promise(async (resolve, reject) => {
			const {data, status, ...rest} = await request.get(`/${url}`, {
				headers: getHeaders()
			})
			if(status === 200) {
				resolve(data)
			} else {
				reject(...rest)
			}
		})
	}
}