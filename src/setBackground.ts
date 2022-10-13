function generateColorHex (): string {
  const color = Math.floor(Math.random()*16777215).toString(16); 
  return `#${color}`;
}

function setBackground(colorHexCode: string): void {
  document.body.style.backgroundColor = colorHexCode;
}

export { setBackground, generateColorHex };