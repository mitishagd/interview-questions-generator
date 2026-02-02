export const theme = {
  colors: {
    background: '#0a0a0a',
    surface: '#121212',
    primary: '#646cff',
    primaryGradient: 'linear-gradient(45deg, #646cff 0%, #a482ff 100%)',
    secondary: '#535bf2',
    text: '#ffffff',
    textSecondary: '#a1a1aa',
    border: '#27272a',
    error: '#ff4b4b',
    success: '#4caf50',
    cardHover: '#1e1e1e'
  },
  typography: {
    fontFamily: '"Inter", system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: '3.2rem',
    h2: '2.4rem',
    body: '1rem',
    small: '0.875rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px'
  },
  shadows: {
    card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(100, 108, 255, 0.3)'
  }
}

export type Theme = typeof theme
