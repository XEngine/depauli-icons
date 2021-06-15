
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V10.5h-2.25a.75.75 0 010-1.5h2.25V7.5h-15V9h6.75a.75.75 0 010 1.5H7.5v12.75a.75.75 0 01-1.5 0V21H1.5v2.25a.75.75 0 01-1.5 0v-21A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v21a.75.75 0 01-.75.75zM6 19.5v-3H1.5v3H6zM6 15v-3H1.5v3H6zm0-4.5v-3H1.5v3H6zM22.5 6V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V6h1.629A2.252 2.252 0 015.25 3h7.5a2.252 2.252 0 012.121 3H22.5zM5.25 4.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z"}}),_c('path',{attrs:{"d":"M12.75 16.5a.75.75 0 01-.75-.75c0-2.068 2.019-3.75 4.5-3.75a.75.75 0 000-1.5.75.75 0 010-1.5 2.252 2.252 0 011.949 3.373C19.995 12.991 21 14.297 21 15.75a.75.75 0 01-.75.75h-7.5zm6.577-1.5c-.418-.88-1.544-1.5-2.827-1.5s-2.409.62-2.827 1.5h5.654z"}})])
          )
        }
      }
    