const axios = require('axios');

module.exports = {
	fetchHTML: async function(title) {
		const options = {
			header: {
				'user-agent':
					'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
				referer: 'https://www.google.com/',
			},
		};
		const html = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(title)}+lyrics`, options);
		return html.data;
	},
};