
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
            children.concat([_c('circle',{attrs:{"cx":"4.5","cy":"7.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"4.5","cy":"16.5","r":"1.125"}}),_c('path',{attrs:{"d":"M5.251 21.75a5.256 5.256 0 01-5.25-5.25c0-1.865.979-3.559 2.548-4.5A5.236 5.236 0 01.001 7.5a5.256 5.256 0 015.25-5.25h13.5a5.256 5.256 0 015.25 5.25 5.238 5.238 0 01-2.548 4.5 5.238 5.238 0 012.548 4.5 5.256 5.256 0 01-5.25 5.25h-13.5zm0-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75h13.5c2.068 0 3.75-1.682 3.75-3.75s-1.682-3.75-3.75-3.75h-13.5zm0-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75h13.5c2.068 0 3.75-1.682 3.75-3.75s-1.682-3.75-3.75-3.75h-13.5z"}}),_c('path',{attrs:{"d":"M10.501 8.25a.75.75 0 010-1.5h8.25a.75.75 0 010 1.5h-8.25zM10.501 17.25a.75.75 0 010-1.5h8.25a.75.75 0 010 1.5h-8.25z"}})])
          )
        }
      }
    