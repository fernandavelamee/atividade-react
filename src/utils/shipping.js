export const FREE_SHIPPING_GOAL = 200;

// Valores em centavos evitam diferenças de arredondamento no limite da meta.
export function getShippingProgress(total, goal = FREE_SHIPPING_GOAL) {
  const totalInCents = Math.max(0, Math.round(total * 100));
  const goalInCents = Math.round(goal * 100);

  return {
    total: totalInCents / 100,
    goal: goalInCents / 100,
    remaining: Math.max(0, goalInCents - totalInCents) / 100,
    // Arredondar para baixo impede mostrar 100% antes de alcançar a meta.
    percentage: Math.min(100, Math.floor((totalInCents * 100) / goalInCents)),
    eligible: totalInCents >= goalInCents,
  };
}
