import { defineGame } from "../reader/interface";

export const test = defineGame({
  name: 'Test',
  level: 114514,
  author: 'Me',
  fns: [
      {
          fn: Math.sin,
          duration: 10,
          start: 0
      },
      {
        fn: Math.cos,
        duration: 10,
        start: 10
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
    },
    {
      type: 'catch',
      x: 7,
      isOff: false
    },
    {
      type: 'catch',
      x: 7.2,
      isOff: false
    },
    {
      type: 'catch',
      x: 7.4,
      isOff: false
    },
  ]
})