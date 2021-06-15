
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24.003A2.252 2.252 0 010 21.753v-19.5A2.252 2.252 0 012.25.003h19.5A2.252 2.252 0 0124 2.253v19.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M7.5 18.754a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.75c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.254a.75.75 0 01-.75.75zm.75-4.504c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5v3zM15 18.75a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5H15z"}})])
          )
        }
      }
    