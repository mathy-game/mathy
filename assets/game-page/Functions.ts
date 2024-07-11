import { _decorator, Color, Component, Graphics, Node } from 'cc';
import { defineGame } from '../reader/interface';
const { ccclass, property } = _decorator;

const test = defineGame({
    name: 'Test',
    level: 114514,
    author: 'Me',
    fns: [
        {
            fn: Math.sin,
            duration: 100
        }
    ]
})

@ccclass('Functions')
export class Functions extends Graphics {
    timeCount: number = 0
    domain: [number, number] = [0, 0]

    start() {

    }

    update(deltaTime: number) {
        this.timeCount += deltaTime
        this.domain[1] = this.timeCount
        this.domain[0] = this.timeCount - 1
        this.draw()
    }

    draw() {
        this.clear()
        this.moveTo(0, 0)
        this.node.setScale(250, 250)
        this.strokeColor = Color.WHITE
        this.lineWidth = 5 / 250
        for (
            let x = this.domain[0];
            x <= this.domain[1];
            x += 1 / 250
          ) {
            const value = test.fns[0].fn(x)
            this.lineTo(x, value)
          }
        this.stroke()
        this.moveTo(0, 0)
        this.lineWidth = 2 / 250
        for (
            let x = this.domain[0];
            x <= this.domain[1] + 3;
            x += 1 / 250
          ) {
            const value = test.fns[0].fn(x)
            this.lineTo(x, value)
          }
        this.stroke()
    }
}


