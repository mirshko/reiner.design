const generateRandomPastelColor = () =>
  `hsl(${360 * Math.random()}, ${25 + 70 * Math.random()}%, ${85 +
    10 * Math.random()}%`;

const styleElementBackground = elems =>
  elems.forEach(el => (el.style.backgroundColor = generateRandomPastelColor()));

styleElementBackground(document.querySelectorAll(".section"));

const netlifyEnvVarUrls = {
  URL: process.env.URL,
  DEPLOY_URL: process.env.DEPLOY_URL,
  DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL
};

console.log(netlifyEnvVarUrls);
