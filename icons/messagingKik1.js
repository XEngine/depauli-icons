
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 1.13c-6.62 0-12 4.45-12 9.93S5.38 21 12 21a14.29 14.29 0 003.88-.53l4.94 2.3a1.24 1.24 0 001.63-1.68l-1.64-3.29A9 9 0 0024 11.06c0-5.48-5.38-9.93-12-9.93zM19.41 17a.75.75 0 00-.2.92l1.57 3.13L16.26 19a.74.74 0 00-.32-.07.73.73 0 00-.22 0 12.75 12.75 0 01-3.72.55c-5.79 0-10.5-3.78-10.5-8.43S6.21 2.63 12 2.63s10.5 3.78 10.5 8.43A7.64 7.64 0 0119.41 17z"}}),_c('path',{attrs:{"d":"M11.41 11.61L13.6 10a.75.75 0 10-.87-1.22l-2.78 2-.26.22V5.93a.75.75 0 10-1.5 0v10a.75.75 0 001.5 0v-3.08l.51-.36 2.57 3.73a.75.75 0 101.23-.85zM15.74 11.33a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5z"}})])
          )
        }
      }
    