const asyncLocalStorage = {
	setItem: async function (key, value) {
		return Promise.resolve().then(() => {
			localStorage.setItem(key, value);
		});
	},

	getItem: async function(key) {
		return Promise.resolve().then(() => {
			return localStorage.getItem(key)
		})
	}
}

export { asyncLocalStorage };