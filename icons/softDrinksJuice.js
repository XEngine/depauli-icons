
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24A2.252 2.252 0 016 21.75v-7.264c0-.075.003-.15.005-.225 0-.004 0-.036.002-.049a6.72 6.72 0 011.974-4.504l.8-.8A.744.744 0 009 8.379V1.5C9 .673 9.673 0 10.5 0h3c.829 0 1.504.673 1.504 1.5v6.883c0 .2.078.388.219.529l.8.8a6.72 6.72 0 011.972 4.538v.016c.003.076.005.148.005.22v7.264A2.252 2.252 0 0115.75 24h-7.5zm-.75-2.25c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V19.5h-9v2.25zm9-3.75v-3h-9v3h9zm-.094-4.5a5.17 5.17 0 00-1.444-2.727l-.8-.8a2.231 2.231 0 01-.659-1.59V4.5H10.5v3.879c0 .601-.234 1.165-.658 1.59l-.8.8A5.178 5.178 0 007.594 13.5h8.812zM13.504 3V1.5H10.5V3h3.004z"}})])
          )
        }
      }
    