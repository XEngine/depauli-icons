
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
            children.concat([_c('path',{attrs:{"d":"M2.75 19.875A2.754 2.754 0 010 17.125v-2.5a.75.75 0 01.75-.75h3.672c-.352-1.712-1.892-3-3.672-3a.75.75 0 01-.75-.75v-5.25a.75.75 0 01.75-.75c.259 0 .514.136.648.346.32.501.754.935 1.255 1.255a4.101 4.101 0 003.109.553 4.1 4.1 0 002.589-1.808.756.756 0 01.584-.345l.048-.001c.223 0 .432.098.575.269l3.767 4.5a.748.748 0 01.114.777l-1.802 4.205H16.5v-3.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3.75h2.25a.75.75 0 01.75.75v2.5a2.754 2.754 0 01-2.75 2.75H2.75zm-1.25-2.75c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-1.75h-21v1.75zm18-3.25v-3H18v3h1.5zm-9.495 0l1.874-4.372L9.005 6.07a5.594 5.594 0 01-4.139 1.804A5.606 5.606 0 011.5 6.75v2.678a5.291 5.291 0 014.446 4.446h4.059z"}})])
          )
        }
      }
    