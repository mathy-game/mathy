import { _decorator, Component, Graphics, Node, Color, Sprite, SpriteFrame, resources, sp, instantiate, Prefab } from 'cc'
import { test } from './test'
const { ccclass, property } = _decorator

@ccclass('cood')
class cood extends Graphics {
    timeCount: number = 0
    domain: [number, number] = [0, 0]
    notesInstances: Sprite[] = []

    start() {
        this.draw()
        this.node.removeAllChildren()
        this.notesInstances = test.notes.map((note, index) => {
            const instance = instantiate(this.node.parent.getChildByName('Sample')).getComponent(Sprite)
            instance.node.setPosition(note.x * 250, test.fns[0].fn(note.x) * 250)
            this.node.addChild(instance.node)
            return instance
        })
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


