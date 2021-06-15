
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-12A2.252 2.252 0 012.25 7.5h19.5A2.252 2.252 0 0124 9.75v12A2.252 2.252 0 0121.75 24H2.25zm0-15a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H2.25zM12 6a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v4.5A.75.75 0 0112 6z"}})])
          )
        }
      }
    