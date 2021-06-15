
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
            children.concat([_c('path',{attrs:{"d":"M10.5 9a3.754 3.754 0 01-3.75-3.75V4.5h-1.5a.75.75 0 010-1.5h1.664l.324-1.296A2.248 2.248 0 019.421 0h2.158c1.034 0 1.932.701 2.182 1.704L14.085 3h1.665a.75.75 0 010 1.5h-1.5v.75A3.754 3.754 0 0110.5 9zM8.25 5.25A2.252 2.252 0 0010.5 7.5a2.252 2.252 0 002.25-2.25V4.5h-4.5v.75zM12.54 3l-.233-.932a.75.75 0 00-.728-.568H9.421a.75.75 0 00-.728.568L8.46 3h4.08zM10.5 24a.75.75 0 01-.75-.75V19.5H7.5a.75.75 0 01-.75-.75V15H6a.75.75 0 01-.75-.75V12h-3a.75.75 0 010-1.5h3.129A2.258 2.258 0 017.5 9h6c.96 0 1.808.615 2.121 1.5h3.129a.75.75 0 010 1.5h-3v2.25A.75.75 0 0115 15h-.75v3.75a.75.75 0 01-.75.75h-2.25v3.75a.75.75 0 01-.75.75zm2.25-6v-3.75a.75.75 0 01.75-.75h.75v-2.25a.75.75 0 00-.75-.75h-6a.75.75 0 00-.75.75v2.25h.75a.75.75 0 01.75.75V18h4.5z"}})])
          )
        }
      }
    