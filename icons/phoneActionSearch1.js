
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
            children.concat([_c('path',{attrs:{"d":"M3.483 24A3.486 3.486 0 010 20.52V4.983A3.486 3.486 0 013.483 1.5H8.25a.75.75 0 010 1.5H3.483C2.39 3 1.5 3.89 1.5 4.983V18H12v-4.5a.75.75 0 011.5 0v7.018A3.486 3.486 0 0110.018 24H3.483zM1.5 20.518c0 1.093.89 1.982 1.982 1.982h6.535A1.985 1.985 0 0012 20.518V19.5H1.5v1.018z"}}),_c('path',{attrs:{"d":"M23.25 14.796a.743.743 0 01-.53-.22L19.044 10.9a5.887 5.887 0 01-3.309 1.006c-3.282 0-5.953-2.671-5.953-5.953S12.453 0 15.735 0s5.953 2.671 5.953 5.953a5.905 5.905 0 01-1.511 3.959l3.603 3.604a.744.744 0 010 1.06.749.749 0 01-.53.22zM15.735 1.5c-2.456 0-4.453 1.998-4.453 4.453s1.998 4.453 4.453 4.453 4.453-1.998 4.453-4.453S18.19 1.5 15.735 1.5z"}})])
          )
        }
      }
    