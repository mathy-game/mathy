import { _decorator, Component, Graphics, Color, Label, Camera, Input, input, Sprite, Animation, AudioSource, instantiate } from 'cc';
import { test } from './test';
const { ccclass, property } = _decorator;

@ccclass('role')
export class role extends Component {
    graphics: Graphics = null
    camera: Camera = null
    combo: Label = null
    comboCount = 0
    notesInstances: Array<Sprite> = []
    timeCount = 0
    isKeyPressing = false

    start(): void {
    }

    onLoad() {
        this.graphics = this.getComponentInChildren(Graphics)
        this.camera = this.node.getChildByName('Camera').getComponent(Camera)
        this.combo = this.camera.node.getChildByName('Combo').getComponent(Label)
        input.on(Input.EventType.KEY_DOWN, this.onKeyPressed, this)
        input.on(Input.EventType.KEY_UP, () => {
            this.isKeyPressing = false
            console.log('keyup')
        }, this)
    }

    update(deltaTime: number) {
        this.notesInstances = (this.node.parent.getChildByName('Graphics').getComponent(Graphics) as any).notesInstances
        this.draw()
        this.combo.string = this.comboCount.toString()
        this.node.setPosition(this.timeCount * 250 - 400, ((x: number) => {
            for (const fn of test.fns) {
              if (x >= fn.start && x <= fn.start + fn.duration) {
                return fn.fn(x)
              }
            }
          })(this.timeCount) * 250)
        this.timeCount += deltaTime

        test.notes.forEach((note, index) => {
            if (note.type === 'catch') {
                if (this.isKeyPressing && this.timeCount >= note.x - 0.05 && this.timeCount <= note.x + 0.05) {
                    const animation = this.notesInstances[index].node.getComponent(Animation)
                    this.notesInstances[index].getComponent(AudioSource).play()
                    animation.play('fadeout')
                    this.notesInstances[index] = null
                    console.log('Perfect!')
                    this.comboCount += 1
                    throw new Error()
                }
            }
        })
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
        this.isKeyPressing = true
        try {
            test.notes.forEach((note, index) => {
                if (this.notesInstances[index] === null) return
                if (note.type === 'tap') {
                    if (this.timeCount >= note.x - 0.1 && this.timeCount <= note.x + 0.1) {
                        const animation = this.notesInstances[index].node.getComponent(Animation)
                        this.notesInstances[index].getComponent(AudioSource).play()
                        animation.play('fadeout')
                        this.notesInstances[index] = null
                        console.log('Perfect!')
                        this.comboCount += 1
                        throw new Error()
                    } else if (this.timeCount >= note.x - 0.2 && this.timeCount <= note.x + 0.2) {
                        const animation = this.notesInstances[index].node.getComponent(Animation)
                        this.notesInstances[index].getComponent(AudioSource).play()
                        animation.play('fadeout')
                        this.notesInstances[index] = null
                        console.log('Good!')
                        this.comboCount += 1
                        throw new Error()
                    } else if (this.timeCount >= note.x - 0.3 && this.timeCount <= note.x + 0.3) {
                        console.log('Bad!')
                        this.notesInstances[index] = null
                        this.comboCount = 0
                        throw new Error()
                    }
                }
            })
        } catch {}
    }

    onDestroy(): void {
        this.notesInstances.forEach((note) => {
            note.node.removeFromParent()
        })
    }
}
