/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			'md-lg': {
  				min: '768px',
  				max: '1024px'
  			}
  		},
  		inset: {
  			'36px': '36px'
  		},
  		fontSize: {
  			xxl: '64px',
  			l: '32px',
  			xl: '36px',
  			sl: '24px',
  			sll: '48px'
  		},
  		fontWeight: {
  			extrabold: '800'
  		},
  		padding: {
  			'4': '17px',
  			'16': '64px'
  		},
  		spacing: {
  			'6': '12px',
  			'10': '40px'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'blue': '#2281ff',
  			'blue1': '#cce4ff',
  			'blue3': '#7dd3fc',
  			'blue4': '#4c7df3',
  			'blue-50': '#eff6ff',
  			'darkBlue': '#1D4ED8',
  			'white': 'white',
  			'black': 'black',
  			'red1': '#fee2e2',
  			'red2': '#fecaca',
  			'red5': '#ef4444',
  			'red6': '#dc2626',
  			'gray7': '#4b5563',
  			'gray1': '#f3f4f6',
  			'gray2': '#e5e7eb',
  			'Dark': '#282828',
  			'lightDark': '#262727',
  			'gray3': '#d1d5db',
  			'gray4': '#9ca3af',
  			'gray5': '#6b7280',
  			'footer_bg': '#1E1E1E',
  			'gray8': '#8F8F8F',
  			'yellow-1': '#FFBA03',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-animate")],
};
