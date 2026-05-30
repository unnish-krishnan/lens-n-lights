export const CATEGORIES = [
  'All',
  'Nature',
  'Rivers',
  'Mountains',
  'Animals',
  'Birds',
  'Landscapes',
  'Abstract',
] as const

export type Category = (typeof CATEGORIES)[number]
