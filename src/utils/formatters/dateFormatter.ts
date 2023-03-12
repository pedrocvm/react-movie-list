export const dateFormatter = (value: string | Date) => {
  const date = new Date(value);
  return new Intl.DateTimeFormat('pt-BR').format(date);
};
