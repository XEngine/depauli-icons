
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
            children.concat([_c('path',{attrs:{"d":"M4.629 19.998a2.233 2.233 0 01-1.592-.66L1.848 18.15a3.727 3.727 0 01-1.099-2.652 3.72 3.72 0 011.099-2.651l2.09-2.092a2.265 2.265 0 01.599-2.097l6.879-6.879c.425-.425.99-.659 1.591-.659s1.166.234 1.591.659l5.379 5.379a2.253 2.253 0 010 3.182l-6.879 6.879a2.235 2.235 0 01-2.102.599l-1.518 1.521c-.425.426-.99.66-1.592.66H4.629zM2.91 13.906a2.252 2.252 0 00-.001 3.182l1.189 1.189c.142.142.33.22.531.22h3.257c.2 0 .389-.078.53-.22l1.279-1.282-4.939-4.939-1.846 1.85zM13.007 2.619c-.2 0-.389.078-.53.22L5.598 9.717a.746.746 0 00-.219.53c0 .201.078.389.219.53l5.379 5.379a.744.744 0 001.06 0l6.879-6.879a.752.752 0 000-1.061l-5.379-5.379a.75.75 0 00-.53-.218zM6 22.998a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H6z"}})])
          )
        }
      }
    