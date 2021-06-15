
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
            children.concat([_c('path',{attrs:{"d":"M8.425 23.997c-2.724 0-4.933-.721-6.007-1.151a2.272 2.272 0 01-1.278-1.28c-.872-2.188-3.22-9.829 3.193-16.243L5.68 3.976c.01-.71.343-1.376.912-1.807A11.01 11.01 0 0116.401.454a.748.748 0 01.257.081 10.96 10.96 0 013.668 2.07L22.722.21c.142-.142.33-.219.53-.219s.389.078.53.22a.752.752 0 010 1.061l-2.396 2.396a11.008 11.008 0 012.067 3.66.737.737 0 01.087.275 11.065 11.065 0 01-1.712 9.793 2.29 2.29 0 01-1.813.919l-1.344 1.344c-2.881 2.879-6.327 4.338-10.246 4.338zM5.393 6.384C-.372 12.15 1.747 19.04 2.534 21.014c.079.201.238.36.436.438a14.987 14.987 0 005.442 1.044c3.516 0 6.61-1.311 9.196-3.897l.855-.855a2.304 2.304 0 01-.124-.118L6.363 5.649a2.687 2.687 0 01-.114-.121l-.856.856zm15.193 10.162a.966.966 0 00.041-.049 9.488 9.488 0 001.624-3.454l-1.528.102-.137 3.401zm-1.49-.286l.121-3.015-2.939.196 2.818 2.819zm-4.258-4.257l.203-3.052-3.051.203 2.848 2.849zm1.508-.07l2.93-.195.123-3.078-2.848.19-.205 3.083zm4.436-.296l1.71-.114a9.424 9.424 0 00-.265-3.052l-1.322.088-.123 3.078zM10.551 7.716l.196-2.94-3.015.121 2.819 2.819zm1.508-.07l3.083-.206.19-2.848-3.077.123-.196 2.931zm4.593-.306l2.807-.187.109-2.73-2.729.109-.187 2.808zm4.313-.288l.757-.05a9.525 9.525 0 00-.702-1.315l-.055 1.365zM10.95 1.742a9.54 9.54 0 00-3.459 1.627.82.82 0 00-.045.038l3.402-.136.102-1.529zm1.405 1.468l3.077-.123.088-1.323a9.498 9.498 0 00-3.052-.262l-.113 1.708zm4.585-.183l1.365-.055a9.418 9.418 0 00-1.315-.702l-.05.757z"}})])
          )
        }
      }
    