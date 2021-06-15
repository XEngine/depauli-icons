
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
            children.concat([_c('path',{attrs:{"d":"M18 17.875c-2.955 0-5.016-2.716-6-4.378-.984 1.662-3.045 4.378-6 4.378-3.308 0-6-2.692-6-6s2.692-6 6-6c2.955 0 5.016 2.716 6 4.378.984-1.662 3.045-4.378 6-4.378 3.308 0 6 2.692 6 6s-2.692 6-6 6zm-5.171-6c.518 1.044 2.439 4.5 5.171 4.5 2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5c-2.731 0-4.653 3.456-5.171 4.5zM6 7.375a4.505 4.505 0 00-4.5 4.5c0 2.481 2.019 4.5 4.5 4.5 2.731 0 4.653-3.456 5.171-4.5-.518-1.044-2.44-4.5-5.171-4.5z"}}),_c('path',{attrs:{"d":"M3.75 12.625a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM18 14.875a.75.75 0 01-.75-.75v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    