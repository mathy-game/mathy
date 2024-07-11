import { defineGame } from "../reader/interface";

export const test = defineGame({
  name: 'Test',
  level: 114514,
  author: 'Me',
  fns: [
      {
          fn: Math.sin,
          duration: 100
      }
  ],
  notes: [
    {
      type: 'tap',
      x: 3,
      isOff: false,
    },
    {
      type: 'tap',
      x: 6,
      isOff: false,
    },
    {
      type: 'tap',
      x: 6.2,
      isOff: false,
    }
  ]
})