
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15H6c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm14.122-3a2.264 2.264 0 00-2.121-1.5H6A.75.75 0 016 18h2.118A2.262 2.262 0 006 16.5H1.5V21h13.372zM11.237 15a2.317 2.317 0 01-2.236-2.381V3.857c-.042-1.248.955-2.311 2.222-2.357H13.5V.75a.75.75 0 011.5 0v.75h3V.75a.75.75 0 011.5 0v.75h2.25c1.288.046 2.291 1.114 2.25 2.382v8.756A2.31 2.31 0 0121.777 15h-10.54zm.021-12a.803.803 0 00-.758.833v8.811a.818.818 0 00.777.857H21.75c.422-.016.765-.389.75-.833v-8.81A.818.818 0 0021.723 3H19.5v2.25a.75.75 0 01-1.5 0V3h-3v2.25a.75.75 0 01-1.5 0V3h-2.242z"}})])
          )
        }
      }
    