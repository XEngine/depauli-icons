
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
            children.concat([_c('path',{attrs:{"d":"M3 24.013a2.236 2.236 0 01-1.616-.687 2.23 2.23 0 01-.633-1.563v-10.5C.75 5.06 5.797.013 12 .013s11.25 5.047 11.25 11.25v10.5a2.236 2.236 0 01-.687 1.616 2.235 2.235 0 01-1.563.633H3zm17.689-1.5l-6-6H12.75v.75a.75.75 0 01-1.5 0v-.75H9.311l-6 6h7.939v-2.25a.75.75 0 011.5 0v2.25h7.939zm1.061-1.061V11.263c0-5.376-4.374-9.75-9.75-9.75s-9.75 4.374-9.75 9.75v10.189l6-6v-4.189A3.754 3.754 0 0112 7.513a3.754 3.754 0 013.75 3.75v4.189l6 6zm-7.5-6.439v-3.75A2.252 2.252 0 0012 9.013a2.252 2.252 0 00-2.25 2.25v3.75h4.5z"}})])
          )
        }
      }
    