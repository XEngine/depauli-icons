
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
            children.concat([_c('path',{attrs:{"d":"M12 12.747a.743.743 0 01-.53-.22l-4.72-4.72v1.189a.75.75 0 01-1.5 0v-3c0-.089.016-.176.048-.261l.007-.02a.756.756 0 01.409-.411l.026-.01A.755.755 0 016 5.247h3a.75.75 0 010 1.5H7.811l4.72 4.72a.747.747 0 01-.531 1.28z"}}),_c('path',{attrs:{"d":"M4.5 23.247a3.754 3.754 0 01-3.75-3.75v-15A3.754 3.754 0 014.5.747h15a3.754 3.754 0 013.75 3.75v15a3.754 3.754 0 01-3.75 3.75h-15zm0-21a2.252 2.252 0 00-2.25 2.25v15a2.252 2.252 0 002.25 2.25h15a2.252 2.252 0 002.25-2.25v-15a2.252 2.252 0 00-2.25-2.25h-15z"}}),_c('path',{attrs:{"d":"M12 18.75A6.758 6.758 0 015.25 12a.75.75 0 011.5 0A5.256 5.256 0 0012 17.25 5.256 5.256 0 0017.25 12 5.256 5.256 0 0012 6.75a.75.75 0 010-1.5c3.722 0 6.75 3.028 6.75 6.75s-3.028 6.75-6.75 6.75z"}})])
          )
        }
      }
    