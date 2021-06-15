
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
            children.concat([_c('path',{attrs:{"d":"M4.5 22.5a3.754 3.754 0 01-3.75-3.75v-9A3.754 3.754 0 014.5 6h2.25V3.75A2.252 2.252 0 019 1.5h6a2.252 2.252 0 012.25 2.25V6h2.25a3.754 3.754 0 013.75 3.75v9a3.754 3.754 0 01-3.75 3.75h-15zm0-15a2.252 2.252 0 00-2.25 2.25v9A2.252 2.252 0 004.5 21h15a2.252 2.252 0 002.25-2.25v-9A2.252 2.252 0 0019.5 7.5h-15zM15.75 6V3.75A.75.75 0 0015 3H9a.75.75 0 00-.75.75V6h7.5z"}}),_c('path',{attrs:{"d":"M12 17.981a.75.75 0 01-.75-.75v-2.25H9a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25H15a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    