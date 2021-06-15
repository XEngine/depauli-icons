
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
            children.concat([_c('path',{attrs:{"d":"M13.876 15.747a3.754 3.754 0 01-3.75-3.75c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75a3.754 3.754 0 01-3.75 3.75zm0-6a2.252 2.252 0 00-2.25 2.25c0 1.241 1.009 2.25 2.25 2.25s2.25-1.009 2.25-2.25a2.252 2.252 0 00-2.25-2.25z"}}),_c('circle',{attrs:{"cx":"1.5","cy":"12.375","r":"1.125"}}),_c('path',{attrs:{"d":"M6.376 14.247a2.252 2.252 0 01-2.25-2.25c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25a2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM21.376 14.247a2.252 2.252 0 01-2.25-2.25c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25a2.252 2.252 0 01-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    