export const formatDate = (milliseconds: number) => {
  const date = new Date(milliseconds);
  date.setHours(date.getHours() + 3);

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
  }).format(date);
};
