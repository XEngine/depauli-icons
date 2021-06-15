
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 018.25 0h7.5a3.754 3.754 0 013.75 3.75v16.5A3.754 3.754 0 0115.75 24h-7.5zM6 20.25a2.252 2.252 0 002.25 2.25h7.5A2.252 2.252 0 0018 20.25v-.75H6v.75zM18 18V3.75a2.252 2.252 0 00-2.25-2.25h-7.5A2.252 2.252 0 006 3.75V18h12zM23.25 15a.75.75 0 01-.75-.75V3.75a.75.75 0 011.5 0v10.5a.75.75 0 01-.75.75zM.75 21a.75.75 0 01-.75-.75V9.75a.75.75 0 011.5 0v10.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    