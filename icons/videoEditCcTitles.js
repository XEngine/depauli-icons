
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V3.75a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M8.25 16.5a3.754 3.754 0 01-3.75-3.75v-1.5A3.754 3.754 0 018.25 7.5h2.25a.75.75 0 010 1.5H8.25A2.252 2.252 0 006 11.25v1.5A2.252 2.252 0 008.25 15h2.25a.75.75 0 010 1.5H8.25zM15.75 16.5A3.754 3.754 0 0112 12.75v-1.5a3.754 3.754 0 013.75-3.75H18A.75.75 0 0118 9h-2.25a2.252 2.252 0 00-2.25 2.25v1.5A2.252 2.252 0 0015.75 15H18a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    