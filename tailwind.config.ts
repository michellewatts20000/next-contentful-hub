import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
	content: [
		'./app/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./lib/**/*.{ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)']
			},
			height: {
				heroCalc: 'calc(-44px + 100vh)'
			},
			screens: {
				tiny: '279px',
				mb: '428px',
                tb: '768px',
                sm: '1024px',
				sd: '1280px',
                md: '1366px',
                lg: '1440px',
                xl: '1920px',
				xxl: '2000px'
			},
			colors: {
				'bright-cyan': '#58F6F4',
				'grey': '#DFE3EA',
				'light-grey':'#EFF0F3',
				'dark-grey':'#707070',
				'light-blue':"#E9F8FB"
			},
			fontSize: {
				clampHeading: "clamp(4.8rem, 6vw, 9.2rem)",
				clampHeading2: "clamp(3rem, 5vw, 5.4rem)",
				'18': ['1.8rem', '2.9rem'],
				'26': ['2.6rem', '2.9rem'],
				'60': ['6.0rem', '7rem'],
				'78': ['7.8rem', '10rem'],
				'99': ['9.9rem', '1.1rem']
			  },
			  lineHeight: {
				tight: '1.00',
				normal: '1.35',
				custom: '1.5',
			},
		}
	},
	future: {
		hoverOnlyWhenSupported: true
	},
	plugins: [typography]
} satisfies Config
