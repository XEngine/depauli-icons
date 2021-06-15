
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M16.014 23.865a.75.75 0 01-.75-.75V21.24c0-.614.088-1.224.263-1.813a3.716 3.716 0 012.026-2.391c.437-.185.711-.594.711-1.048v-5.623a.75.75 0 00-1.5 0v2.25a.75.75 0 01-.75.75 2.252 2.252 0 00-2.25 2.25.75.75 0 01-1.5 0c0-.2.017-.4.049-.599l-5.109 1.259a3.043 3.043 0 01-.877.086c.103.294.326.538.624.664a3.746 3.746 0 012.054 2.418c.171.575.259 1.182.258 1.797v1.875a.75.75 0 01-1.5 0V21.24c0-.47-.067-.936-.201-1.386a2.244 2.244 0 00-1.22-1.457 2.607 2.607 0 01-1.579-2.406v-.144a3.089 3.089 0 01-1.289-1.829L2.082 8.352a3.086 3.086 0 012.258-3.73l1.924-.473v-.764a2.244 2.244 0 011.881-2.219l5.999-1a2.246 2.246 0 012.48 1.44l.177-.044a3.076 3.076 0 013.73 2.258l1.398 5.685a3.05 3.05 0 01-.363 2.309 3.063 3.063 0 01-1.803 1.37v2.802a2.622 2.622 0 01-1.603 2.419c-.58.27-1.018.793-1.192 1.43a4.937 4.937 0 00-.206 1.402v1.875a.748.748 0 01-.748.753zM4.698 6.078c-.41.101-.756.356-.976.718s-.284.788-.184 1.197l1.393 5.666c.116.47.437.857.881 1.06a1.582 1.582 0 001.034.1l.799-.197-1.031-4.184a.752.752 0 01.73-.93c.346 0 .645.235.728.571l1.031 4.184 3.979-.98a3.772 3.772 0 012.183-1.342v-1.576c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v1.198a1.576 1.576 0 00.704-1.722l-1.393-5.662a1.58 1.58 0 00-1.913-1.16l-.397.097v2.228c0 1.104-.79 2.038-1.879 2.22l-6 1a2.23 2.23 0 01-1.68-.388 2.236 2.236 0 01-.943-1.832v-.65l-1.566.384zm9.817-4.442a.75.75 0 00-.124.01l-5.999 1a.747.747 0 00-.627.74v2.959a.748.748 0 00.873.741l6-1a.747.747 0 00.626-.74v-2.96a.756.756 0 00-.749-.75z"}})])
          )
        }
      }
    