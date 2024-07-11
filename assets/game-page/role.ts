import { _decorator, Component, Graphics, Color, Label, Camera, Input, input, Sprite } from 'cc';
import { test } from './test';
const { ccclass, property } = _decorator;

@ccclass('role')
export class role extends Component {
    graphics: Graphics = null
    camera: Camera = null
    combo: Label = null
    notesInstances: Array<Sprite> = []
    timeCount = 0

    start(): void {
    }

    onLoad() {
        this.graphics = this.getComponentInChildren(Graphics)
        this.camera = this.node.getChildByName('Camera').getComponent(Camera)
        this.combo = this.camera.node.getChildByName('Combo').getComponent(Label)
        input.on(Input.EventType.KEY_DOWN, this.onKeyPressed, this)
    }

    update(deltaTime: number) {
        this.notesInstances = (this.node.parent.getChildByName('Graphics').getComponent(Graphics) as any).notesInstances
        this.draw()
        this.combo.string = (Number(this.combo.string) + 1).toString()
        this.node.setPosition(this.timeCount * 250 - 400, Math.sin(this.timeCount) * 250)
        this.timeCount += deltaTime
    }

    draw() {
        this.graphics.clear()
        this.graphics.lineWidth = 3
        this.graphics.strokeColor = Color.YELLOW
        this.graphics.moveTo(0, 1000)
        this.graphics.lineTo(0, -1000)
        this.graphics.moveTo(5000, 0)
        this.graphics.lineTo(-5000, 0)
        this.graphics.stroke()
    }

    onKeyPressed() {
        test.notes.forEach((note, index) => {
            if (note.type === 'tap') {
                if (this.timeCount >= note.x - 0.1 && this.timeCount <= note.x + 0.1) {
                    this.notesInstances[index].node.removeFromParent()
                    console.log('Perfect!')
                } else if (this.timeCount >= note.x - 0.2 && this.timeCount <= note.x + 0.2) {
                    this.notesInstances[index].node.removeFromParent()
                    console.log('Good!')
                } else {
                    console.log('Bad!')
                }
            }
        })
    }

    onDestroy(): void {
        this.notesInstances.forEach((note) => {
            note.node.removeFromParent()
        })
    }
}


