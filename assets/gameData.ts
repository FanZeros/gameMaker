import { GameDefinition } from '../types';

export const GAME_DATA: GameDefinition = {
  "meta": {
    "name": "未命名项目",
    "author": "Unknown",
    "version": "0.0.1",
    "description": "这是一个空的项目模板。",
    "endingMessage": "游戏结束。",
    "useBannerAsTitleBg": false,
    "bgmUrl": ""
  },
  "marketing": {
    "iconUrl": "",
    "bannerUrl": ""
  },
  "initialState": {
    "currentSceneId": "start",
    "inventory": [],
    "flags": {},
    "log": [],
    "gameOver": false,
    "gameWon": false
  },
  "items": {},
  "puzzles": {},
  "scenes": {}
};