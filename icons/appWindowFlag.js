
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
            children.concat([_c('path',{attrs:{"d":"M2.26 21.003a2.252 2.252 0 01-2.25-2.25v-16.5A2.252 2.252 0 012.26.003h18a2.252 2.252 0 012.25 2.25v7.5a.75.75 0 01-1.5 0v-3.75H1.51v12.75c0 .414.336.75.75.75h9a.75.75 0 010 1.5h-9zm18.75-16.5v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M14.262 24.003a.75.75 0 01-.75-.75v-10.5a.75.75 0 01.75-.75h8.999a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-8.249v3.75a.75.75 0 01-.75.75zm8.249-6v-4.5h-7.499v4.5h7.499z"}})])
          )
        }
      }
    