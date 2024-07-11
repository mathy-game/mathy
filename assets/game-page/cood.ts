import { _decorator, Component, Graphics, Node, Color } from 'cc';
const { ccclass, property } = _decorator;
import { game } from '../global';
import { defineGame } from '../reader/interface';

@ccclass('cood')
class cood extends Graphics {
    timeCount: number = 0
    domain: [number, number] = [0, 0]

    start() {
        this.draw()
    }

    update(deltaTime: number) {
        this.timeCount += deltaTime
        this.domain[1] = this.timeCount
    }

    draw() {
        this.clear()
        this.strokeColor = Color.WHITE
        this.lineWidth = 2
        for (let i = -1000; i <= 100000; i += 250) {
            this.moveTo(i, -10000)
            this.lineTo(i, 10000)
            this.moveTo(-100000, i)
            this.lineTo(100000, i)
        }
        this.moveTo(0, 0)
        this.stroke()

    }
}


