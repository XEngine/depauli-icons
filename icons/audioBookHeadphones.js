
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
            children.concat([_c('path',{attrs:{"d":"M21.75 20.25A2.252 2.252 0 0119.5 18v-6.75c-.012-4.123-3.377-7.488-7.502-7.5-4.121.013-7.486 3.378-7.498 7.502V18c0 1.241-1.009 2.25-2.25 2.25S0 19.241 0 18v-3a2.252 2.252 0 013-2.121V11.25c.015-4.948 4.051-8.985 8.998-9 4.95.014 8.988 4.051 9.002 8.998v1.631A2.252 2.252 0 0124 15v3a2.252 2.252 0 01-2.25 2.25zm0-6A.75.75 0 0021 15v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75zm-19.5 0a.75.75 0 00-.75.75v3A.75.75 0 003 18v-3a.75.75 0 00-.75-.75z"}}),_c('path',{attrs:{"d":"M7.5 21.751c-.827 0-1.5-.673-1.5-1.5v-10.5c0-.827.673-1.5 1.5-1.5h9c.827 0 1.5.673 1.5 1.5v10.5c0 .827-.673 1.5-1.5 1.5h-9zm0-1.5h9v-10.5h-9v10.5z"}}),_c('path',{attrs:{"d":"M12 12.751a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H12zM9.75 15.751a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM9.75 18.751a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    