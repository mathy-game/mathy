import { _decorator, Component, Graphics, Color, Label, Camera } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('role')
export class role extends Component {
    graphics: Graphics = null
    camera: Camera = null
    combo: Label = null
    timeCount = 0

    start() {
        this.graphics = this.getComponentInChildren(Graphics)
        this.camera = this.node.getChildByName('Camera').getComponent(Camera)
        this.combo = this.camera.node.getChildByName('Combo').getComponent(Label)
    }

    update(deltaTime: number) {
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
}


