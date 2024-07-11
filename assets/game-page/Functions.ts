import { _decorator, Color, Component, Graphics, Node } from 'cc'
import { test } from './test'
const { ccclass, property } = _decorator

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
            const value = ((x: number) => {
              for (const fn of test.fns) {
                if (x >= fn.start && x <= fn.start + fn.duration) {
                  return fn.fn(x)
                }
              }
            })(x)
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
            const value = ((x: number) => {
              for (const fn of test.fns) {
                if (x >= fn.start && x <= fn.start + fn.duration) {
                  return fn.fn(x)
                }
              }
            })(x)
            this.lineTo(x, value)
          }
        this.stroke()
    }
}


