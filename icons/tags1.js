
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
            children.concat([_c('path',{attrs:{"d":"M14.174 23.613c-.401 0-.778-.156-1.061-.44L1.484 11.543A3.726 3.726 0 01.385 8.892V2.634a2.252 2.252 0 012.25-2.25h6.258c1.002 0 1.943.391 2.651 1.099l11.63 11.63c.21.21.352.475.41.767.079.392 0 .792-.223 1.126a1.49 1.49 0 01-.953.639l-5.636 1.127-1.127 5.636a1.5 1.5 0 01-1.471 1.205zM2.635 1.884a.75.75 0 00-.75.75v6.258c0 .601.234 1.166.659 1.59l11.63 11.63 1.225-6.125a.745.745 0 01.589-.588l6.126-1.225-11.63-11.63a2.235 2.235 0 00-1.591-.659H2.635z"}}),_c('path',{attrs:{"d":"M6.385 8.634c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    