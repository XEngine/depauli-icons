
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
            children.concat([_c('path',{attrs:{"d":"M20.75 24a.75.75 0 01-.75-.75V3.75a2.252 2.252 0 00-2.25-2.25h-7.5a.75.75 0 00-.75.75v1.5c0 .96-.615 1.808-1.5 2.121V7.5h.75a3.754 3.754 0 013.75 3.75v6A3.754 3.754 0 018.75 21H8v2.25a.75.75 0 01-1.5 0V21h-.75A3.754 3.754 0 012 17.25v-6A3.754 3.754 0 015.75 7.5h.75V5.871A2.258 2.258 0 015 3.75a.75.75 0 011.5 0 .75.75 0 001.5 0v-1.5A2.252 2.252 0 0110.25 0h7.5a3.754 3.754 0 013.75 3.75v19.5a.75.75 0 01-.75.75zM3.5 17.25a2.252 2.252 0 002.25 2.25h3A2.252 2.252 0 0011 17.25v-.75H8.75a.75.75 0 010-1.5H11v-1.5H3.5v3.75zM11 12v-.75A2.252 2.252 0 008.75 9h-3a2.252 2.252 0 00-2.25 2.25V12H11z"}})])
          )
        }
      }
    