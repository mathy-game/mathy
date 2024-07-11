import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Combo')
export class Combo extends Label {
    start() {
        this.string = (0).toString()
    }

    update(deltaTime: number) {
    }
}


