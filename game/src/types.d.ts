import { mainGameStateActor } from "./stateMachines/mainGameState";
import Phaser from "phaser";
import { Peer } from "peerjs";

declare global {
  interface Window {
    resourceLoadProgress: number;
    game: Phaser.Game;
    peer: Peer;
    mainGameStateActor: typeof mainGameStateActor;
  }
}

export default global;
