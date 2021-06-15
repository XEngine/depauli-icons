
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
            children.concat([_c('path',{attrs:{"d":"M14.431 16.25a4.486 4.486 0 01-2.97-1.125 4.466 4.466 0 01-1.515-3.093 4.501 4.501 0 017.867-3.258.75.75 0 01-.093 1.08l-2.36 1.895 2.36 1.895a.753.753 0 01.092 1.082 4.475 4.475 0 01-3.381 1.524zm.008-7.499a3 3 0 101.648 5.507l-2.395-1.923c-.178-.143-.28-.356-.28-.585s.102-.442.28-.585l2.393-1.922a2.996 2.996 0 00-1.646-.492z"}}),_c('path',{attrs:{"d":"M3.75 19.25A3.754 3.754 0 010 15.5V8a3.754 3.754 0 013.75-3.75h16.5A3.754 3.754 0 0124 8v7.5a3.754 3.754 0 01-3.75 3.75H3.75zm16.5-1.5a2.252 2.252 0 002.25-2.25V8a2.252 2.252 0 00-2.25-2.25H6v12h14.25zm-16.5-12A2.252 2.252 0 001.5 8v7.5a2.252 2.252 0 002.25 2.25h.75v-12h-.75z"}})])
          )
        }
      }
    