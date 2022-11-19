module.exports = {
	extends: ["stylelint-prettier/recommended", "stylelint-config-recommended"],
	rules: {
		"selector-class-pattern": /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
		"prettier/prettier": true
	}
}