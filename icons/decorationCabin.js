
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24a.75.75 0 01-.75-.75V21H.75a.75.75 0 010-1.5h1.024A13.538 13.538 0 003 13.9v-2.65a6.712 6.712 0 014.5-6.366V4.5C7.5 2.019 9.519 0 12 0s4.5 2.019 4.5 4.5v.384A6.712 6.712 0 0121 11.25v2.65c0 1.914.423 3.845 1.226 5.6h1.024a.75.75 0 010 1.5h-.75v2.25a.75.75 0 01-.75.75H2.25zM21 22.5v-1.496H3V22.5h18zm-.411-3a15.09 15.09 0 01-1.089-5.6v-2.65a5.249 5.249 0 00-3.938-5.085.75.75 0 01-.562-.726V4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v.939a.75.75 0 01-.562.726A5.25 5.25 0 004.5 11.25v2.65c0 1.902-.375 3.826-1.089 5.6H6v-8.25A3.754 3.754 0 019.75 7.5h4.5A3.754 3.754 0 0118 11.25v8.25h2.589zm-4.089 0v-8.25A2.252 2.252 0 0014.25 9h-1.5v10.5h3.75zm-5.25 0V9h-1.5a2.252 2.252 0 00-2.25 2.25v8.25h3.75z"}})])
          )
        }
      }
    