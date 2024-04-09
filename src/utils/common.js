export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

export const formatURL = (url) => url.match(/h.+\w/g)?.toString();

export const buildURL = (url, params) => {
	let urlWithParams = url;

	Object.entries(params).forEach(([key, value], i) => {
		const sign = !i ? '?' : '&';

		urlWithParams += `${sign}${key}=${value}`;
	});

	return urlWithParams;
};

export const sumBy = (arr) => arr.reduce((prev, cur) => prev + cur, 0);

export const validateInput = (isValid, setError, message) => {
	if (!isValid) {
		setError(message);
	} 
	else {
		setError(null);
	}
}