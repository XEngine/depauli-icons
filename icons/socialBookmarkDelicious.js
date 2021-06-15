
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
            children.concat([_c('path',{attrs:{"d":"M1 23.75h11a.75.75 0 00.75-.75V12.75H23a.75.75 0 00.75-.75V1A.75.75 0 0023 .25H12a.75.75 0 00-.75.75v10.25H1a.75.75 0 00-.75.75v11a.75.75 0 00.75.75zm11.75-22h9.5v9.5h-9.5zm-11 11h9.5v9.5h-9.5z"}})])
          )
        }
      }
    