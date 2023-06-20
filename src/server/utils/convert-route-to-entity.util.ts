const mapping: Record<string, string> = {
  academies: 'academy',
  coaches: 'coach',
  goals: 'goal',
  performances: 'performance',
  players: 'player',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
