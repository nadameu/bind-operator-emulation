import { forEach, map, takeWhile } from './fake-library';

interface Player {
  character(): Character;
}
interface Character {
  strength: number;
  toString(): string;
}

function getPlayers(): Player[] {
  return [];
}

getPlayers()
  [map](x => x.character())
  [takeWhile](x => x.strength > 100)
  [forEach](x => console.log(x));
