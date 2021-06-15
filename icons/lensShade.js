
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
            children.concat([_c('path',{attrs:{"d":"M9.749 24a2.252 2.252 0 01-2.25-2.25V21c-.827 0-1.5-.673-1.5-1.5V8.946a2.247 2.247 0 01-1.726-1.755l-1.08-5.4c-.079-.392-.001-.792.221-1.126a1.49 1.49 0 011.251-.671h14.67a1.503 1.503 0 011.471 1.8l-1.08 5.397A2.247 2.247 0 0118 8.946V19.5c0 .827-.673 1.5-1.5 1.5v.75A2.252 2.252 0 0114.25 24H9.749zm-.75-2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V21l-6 .75zm-1.5-2.25h9V12h-9v7.5zm9-9V9h-9v1.5h9zM5.744 6.897a.751.751 0 00.735.603h11.04a.753.753 0 00.736-.603l1.08-5.4-14.669-.003 1.078 5.403z"}}),_c('path',{attrs:{"d":"M9.749 18a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM14.249 18a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    