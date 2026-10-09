

export function formatToPeso(amount: number): string {
  const formatted = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
  }).format(amount);

  return formatted.replace("₱", "₱ ");
}


export const truncateText = (text: string, limit: number) =>
  text.length > limit ? text.slice(0, limit) + "..." : text;


