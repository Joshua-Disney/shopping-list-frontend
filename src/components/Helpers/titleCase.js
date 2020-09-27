const titleCase = (str) => {
	return str[0].toUpperCase() + str
		.substr(1)
		.replace(
			/(?<=[a-z])[A-Z]|(?<=[a-z])[_-][a-z]/g, 
			(char) => ` ${char}`
		);
};

export default titleCase