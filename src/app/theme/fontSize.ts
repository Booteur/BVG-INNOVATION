const fontSizes: { [font: string]: string } = {};
const base = 14;
for (let i = 5; i <= 100; i++) {
  fontSizes[`fs-${i}`] = `${i / base}rem`;
}
const lineHeight: { [font: string]: string } = {};
for (let i = 0; i <= 100; i++) {
  lineHeight[`lh-${i}`] = `${i / base}rem`;
}
export { fontSizes, lineHeight };
