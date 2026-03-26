@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --color-climb-blue: #0047AB;
  --color-climb-yellow: #FFC300;
  --color-climb-red: #E63946;
  --color-climb-white: #FFFFFF;
  --color-climb-bordeaux: #780000;
  --color-climb-black: #0A0A0A;
  --color-climb-lightgrey: #F3F4F6;
  --color-climb-beige: #EAE0D5;

  --font-display: "Anton", sans-serif;
  --font-body: "Inter", sans-serif;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-climb-white);
  color: var(--color-climb-black);
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-climb-lightgrey);
}
::-webkit-scrollbar-thumb {
  background: var(--color-climb-bordeaux);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-climb-red);
}
