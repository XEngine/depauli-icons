
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M16.417 20.428a1.484 1.484 0 01-1.06-.439l-1.499-1.499a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.5 1.5 2.906-3.874a.753.753 0 011.049-.151c.332.249.399.72.151 1.051l-2.905 3.873c-.283.376-.732.6-1.202.6zM2.25 16.5A2.252 2.252 0 010 14.25v-12A2.22 2.22 0 01.498.839L.521.812A2.245 2.245 0 012.25 0h18c.671 0 1.301.296 1.731.814.01.01.019.022.026.031l.018.026c.311.399.475.875.475 1.379V9A.75.75 0 0121 9V2.562l-7.276 5.596a4.077 4.077 0 01-2.474.841c-.891 0-1.77-.299-2.474-.841L1.5 2.562V14.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm7.44-9.531a2.564 2.564 0 003.119 0L19.921 1.5H2.579L9.69 6.969z"}})])
          )
        }
      }
    