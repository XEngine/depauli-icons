
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
            children.concat([_c('path',{attrs:{"d":"M1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM15 16.5a.75.75 0 01-.75-.75v-6A2.252 2.252 0 0116.5 7.5H18A.75.75 0 0118 9h-1.5a.75.75 0 00-.75.75V12h1.5a.75.75 0 010 1.5h-1.5v2.25a.75.75 0 01-.75.75zM12 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM7.5 16.5a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 017.5 7.5H9A.75.75 0 019 9H7.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-.75a.75.75 0 010-1.5H9a.75.75 0 01.75.75v1.5A2.252 2.252 0 017.5 16.5z"}})])
          )
        }
      }
    