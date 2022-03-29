const lyrics = require('../index');

(async () => {
	const lyric = await lyrics.LyricsFinder('alone - alan walker');
	console.log(lyric);
})();

// or

lyrics.LyricsFinder('alone - alan walker').then(data => {
	console.log(data);
});