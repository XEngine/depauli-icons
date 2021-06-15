
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
            children.concat([_c('path',{attrs:{"d":"M3.75 18c-1.654 0-3-1.346-3-3V9a3.005 3.005 0 013.001-3H17.25c1.654 0 3 1.346 3 3H21a2.252 2.252 0 012.25 2.25v1.5A2.252 2.252 0 0121 15h-.75c0 1.654-1.346 3-3 3H3.75zm.001-10.5c-.827 0-1.501.673-1.501 1.5v6c0 .827.673 1.5 1.5 1.5h13.5c.827 0 1.5-.673 1.5-1.5v-.75a.75.75 0 01.75-.75H21a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 01-.75-.75V9c0-.827-.673-1.5-1.5-1.5H3.751z"}}),_c('path',{attrs:{"d":"M6.001 15a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM10.501 15a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    