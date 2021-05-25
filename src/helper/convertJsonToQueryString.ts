export const convertJsonToQueryString = (json: any) => {
	let queryString = '';
	const stringCount = Object.keys(json).length - 1;
	Object.keys(json).forEach((item, index) => {
		if (json[item] !== '') {
			queryString += `_${item}=${json[item]}${index < stringCount ? '&' : ''}`;
		}
	});
	return queryString;
};
