
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
            children.concat([_c('path',{attrs:{"d":"M16.5 16.5a.75.75 0 01-.75-.75v-6A2.252 2.252 0 0118 7.5h1.5a.75.75 0 010 1.5H18a.75.75 0 00-.75.75V12h1.5a.75.75 0 010 1.5h-1.5v2.25a.75.75 0 01-.75.75zM6 16.5a.75.75 0 01-.75-.75V9H4.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v6.75a.75.75 0 01-.75.75zM12 16.5a.75.75 0 01-.75-.75V9h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v6.75a.75.75 0 01-.75.75zM1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21z"}})])
          )
        }
      }
    