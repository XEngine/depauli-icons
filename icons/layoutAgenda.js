
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
            children.concat([_c('path',{attrs:{"d":"M2.25 10.497A2.252 2.252 0 010 8.247v-6a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 2.247v6a2.252 2.252 0 01-2.25 2.25H2.25zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75H2.25zM2.25 23.997A2.252 2.252 0 010 21.747v-6a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v6a2.252 2.252 0 01-2.25 2.25H2.25zm0-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    