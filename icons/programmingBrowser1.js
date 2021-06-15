
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
            children.concat([_c('path',{attrs:{"d":"M2.25 22.5A2.252 2.252 0 010 20.25V3.865A2.376 2.376 0 012.363 1.5h19.28A2.369 2.369 0 0124 3.855v16.28a2.376 2.376 0 01-2.363 2.365H2.25zm-.75-2.25c0 .414.336.75.75.75h19.385a.87.87 0 00.865-.867V7.5h-21v12.75zM22.5 6V3.857A.862.862 0 0021.641 3H2.365a.872.872 0 00-.865.867V6h21z"}}),_c('path',{attrs:{"d":"M12.75 15a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM6.75 18a.752.752 0 01-.53-1.281l2.47-2.47-2.47-2.47c-.142-.14-.22-.329-.22-.529s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3 3a.752.752 0 010 1.061l-3 3a.746.746 0 01-.53.219z"}})])
          )
        }
      }
    