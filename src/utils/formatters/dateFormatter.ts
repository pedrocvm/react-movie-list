export const dateFormatter = (value: string | Date) => {
  if (!!value) {
    const date = new Date(value);
    return new Intl.DateTimeFormat('pt-BR').format(date);
  }

  return 'Soon';
};

export const getNextMonth = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
  const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;

  return `${nextYear}-${nextMonth.toString().padStart(2, '0')}-01`;
};
