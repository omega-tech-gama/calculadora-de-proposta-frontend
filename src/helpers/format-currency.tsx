export function formatCurrency(number: string) {
  const parsedNumber = parseInt(number);
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(parsedNumber);
}