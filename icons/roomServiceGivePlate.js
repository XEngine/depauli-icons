
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
            children.concat([_c('path',{attrs:{"d":"M.75 24.004a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v.75H6c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5H6a.75.75 0 010-1.5h2.118A2.262 2.262 0 006 16.504H1.5v4.5h13.371zM11.25 15.004a.75.75 0 010-1.5h7.15a2.24 2.24 0 002.009-1.24l.129-.26H2.25a.75.75 0 010-1.5h.781C3.397 5.746 7.242 1.901 12 1.535V.754a.75.75 0 011.5 0v.781c4.758.367 8.603 4.211 8.969 8.969h.781a.75.75 0 010 1.5h-1.036l-.464.93a3.733 3.733 0 01-3.35 2.07h-7.15zm9.716-4.5a8.23 8.23 0 00-8.216-7.5 8.229 8.229 0 00-8.216 7.5h16.432z"}})])
          )
        }
      }
    