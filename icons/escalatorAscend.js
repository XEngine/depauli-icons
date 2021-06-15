
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
            children.concat([_c('path',{attrs:{"d":"M.75 9a.743.743 0 01-.53-.22C.078 8.639 0 8.45 0 8.25s.078-.389.22-.53L6.44 1.5H2.25a.75.75 0 010-1.5h6c.089 0 .177.016.261.048l.02.007A.76.76 0 019 .75v6a.75.75 0 01-1.5 0V2.561L1.28 8.78A.743.743 0 01.75 9zM3.75 24A3.754 3.754 0 010 20.25v-1.5A3.754 3.754 0 013.75 15h2.729l8.792-7.326a.748.748 0 01.479-.174h4.5A3.754 3.754 0 0124 11.25v1.5a3.754 3.754 0 01-3.75 3.75h-2.729L8.73 23.826a.75.75 0 01-.48.174h-4.5zm0-7.5a2.252 2.252 0 00-2.25 2.25v1.5a2.252 2.252 0 002.25 2.25h4.229l8.792-7.326A.748.748 0 0117.25 15h3a2.252 2.252 0 002.25-2.25v-1.5A2.252 2.252 0 0020.25 9h-4.229L7.23 16.326a.75.75 0 01-.48.174h-3z"}})])
          )
        }
      }
    