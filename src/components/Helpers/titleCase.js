const titleCase = (str) => {
	const regex = /_-/.test(str) 
		? /([a-z])([A-Z])/g
		: /([a-z])[_-]([a-z])/g

	return str[0].toUpperCase() + str
		.substr(1)
		.replace(
			regex,
			(_, end, start) => `${end} ${start.toUpperCase()}`
		);
};

export default titleCase;
