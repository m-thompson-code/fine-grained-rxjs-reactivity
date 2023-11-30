/**
 * source: https://css-tricks.com/snippets/javascript/random-hex-color/#:~:text=also%20more%20readable).-,%E2%80%98%23%E2%80%99%2B(Math.random()*0xFFFFFF%3C%3C0).toString(16)%3B,-Ken
 */
export const randomColor = () => {
  return `#${(Math.random()*0xFFFFFF<<0).toString(16)}`;
}
