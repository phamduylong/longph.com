const asyncLocalStorage = {
	setItem: async function (key : string, value : string) : Promise<void> {
		return Promise.resolve().then(() => {
			localStorage.setItem(key, value);
		});
	},

	getItem: async function (key : string) : Promise<string | null> {
		return Promise.resolve().then(() => {
			return localStorage.getItem(key);
		});
	}
};

export { asyncLocalStorage };
