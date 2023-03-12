export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }

  const truncatedText = text.slice(0, maxLength);

  return `${truncatedText}...`;
};
