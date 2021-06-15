
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
            children.concat([_c('path',{attrs:{"d":"M18.75 19.5c-.96 0-1.808-.615-2.121-1.5H8.871c-.314.885-1.162 1.5-2.121 1.5s-1.808-.615-2.121-1.5H2.25A2.252 2.252 0 010 15.75v-3a2.252 2.252 0 012.25-2.25H9V6.75a2.252 2.252 0 012.25-2.25h3.573c.858 0 1.629.476 2.013 1.244l2.377 4.756h1.037A3.754 3.754 0 0124 14.25v1.5A2.252 2.252 0 0121.75 18h-.879a2.258 2.258 0 01-2.121 1.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-12 0a.75.75 0 100 1.5.75.75 0 000-1.5zm15 0a.75.75 0 00.75-.75v-1.5A2.252 2.252 0 0020.25 12h-18a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h2.379C4.942 15.615 5.79 15 6.75 15s1.808.615 2.121 1.5h7.757c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h.88zm-4.213-6l-2.042-4.086A.75.75 0 0014.823 6H11.25a.75.75 0 00-.75.75v3.75h7.037z"}})])
          )
        }
      }
    