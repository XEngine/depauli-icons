
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
            children.concat([_c('path',{attrs:{"d":"M1 23.23a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v.75h4.5c1.8 0 3.324 1.268 3.675 3H13a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.75v.75c0 .413-.337.75-.75.75zm14.121-3A2.264 2.264 0 0013 18.73H6.25a.75.75 0 010-1.5h2.118a2.262 2.262 0 00-2.118-1.5h-4.5v4.5h13.371zM11.5 14.23a2.252 2.252 0 01-2.25-2.25V8.23a.75.75 0 011.5 0v3.75c0 .413.336.75.75.75h6a.75.75 0 00.75-.75V8.23a.75.75 0 011.5 0v3.75a2.252 2.252 0 01-2.25 2.25h-6z"}}),_c('path',{attrs:{"d":"M22 8.23a.745.745 0 01-.502-.193l-6.5-5.847a.752.752 0 00-1.003 0L7.501 8.037a.745.745 0 01-1.058-.055.75.75 0 01.055-1.059l6.494-5.847a2.247 2.247 0 013.009 0l3.749 3.372V2.23a.75.75 0 011.5 0v3.567l1.251 1.126A.75.75 0 0122 8.23z"}})])
          )
        }
      }
    