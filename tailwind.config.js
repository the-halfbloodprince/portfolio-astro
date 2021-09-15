module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
		colors: {
			bg: '#00041E',
			accent: {
				// '2': '#3275a8',
				// 'DEFAULT': '#0644FD',
				'2': '#5446F6',
				'DEFAULT': '#6a26cd',
			},
		}
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
