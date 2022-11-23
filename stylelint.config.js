module.exports = {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier', 'stylelint-config-recommended'],
	rules: {
		'selector-class-pattern': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/
	},
};
