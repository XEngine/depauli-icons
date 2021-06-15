
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-2.592 0-5.06-.817-7.14-2.362a.755.755 0 01-.13-.099C1.724 19.243 0 15.768 0 12 0 5.383 5.383 0 12 0s12 5.383 12 12c0 3.768-1.724 7.243-4.73 9.54a.787.787 0 01-.128.098A11.896 11.896 0 0112 24zm-5.986-3.381A10.407 10.407 0 0012 22.5c2.155 0 4.22-.65 5.986-1.881C17.787 17.503 15.143 15 12 15s-5.787 2.503-5.986 5.619zM12 13.5a7.481 7.481 0 017.347 5.99A10.487 10.487 0 0022.5 12c0-5.79-4.71-10.5-10.5-10.5S1.5 6.21 1.5 12c0 2.824 1.141 5.517 3.153 7.49A7.481 7.481 0 0112 13.5z"}}),_c('path',{attrs:{"d":"M16.63 11.252c-.34 0-.677-.058-1.001-.173A2.986 2.986 0 0113.8 9.25a.74.74 0 01.031-.573.744.744 0 01.676-.427c.318 0 .602.201.708.501a1.495 1.495 0 001.415 1.001c.223 0 .441-.05.646-.148a1.49 1.49 0 00.767-.854.75.75 0 011.413.499 2.98 2.98 0 01-1.535 1.707 2.944 2.944 0 01-1.291.296zM7.369 11.251c-.339 0-.675-.058-.997-.171a2.984 2.984 0 01-1.829-1.829.745.745 0 01.03-.573.746.746 0 01.677-.428c.317 0 .601.201.707.501a1.494 1.494 0 001.413 1c.636 0 1.205-.402 1.416-1a.752.752 0 01.957-.457c.39.138.595.567.458.957a3.009 3.009 0 01-2.832 2z"}})])
          )
        }
      }
    