export interface MoveImageHandler {
  (direction: Direction): Promise<void>;
}

type Direction = "prev" | "next";

export interface IntervalIdStateManager {
  setIntervalId(id: number): void;
  getIntervalId(): number;
}

export interface HeroImage {
  src: string;
  id: number;
}
