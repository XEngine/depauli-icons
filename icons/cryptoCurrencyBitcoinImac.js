
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 010-1.5h3v-3h-7.5A3.754 3.754 0 010 15.75v-12A3.754 3.754 0 013.75 0H6a.75.75 0 010 1.5H3.75A2.252 2.252 0 001.5 3.75v12A2.252 2.252 0 003.75 18h16.5a2.252 2.252 0 002.25-2.25v-12a2.252 2.252 0 00-2.25-2.25H18A.75.75 0 0118 0h2.25A3.754 3.754 0 0124 3.75v12a3.754 3.754 0 01-3.75 3.75h-7.5v3h3a.75.75 0 010 1.5h-7.5z"}}),_c('path',{attrs:{"d":"M13.5 15.75a.75.75 0 01-.75-.75v-1.5h-1.5V15a.75.75 0 01-1.5 0v-1.5H9a.75.75 0 01-.75-.75v-9A.75.75 0 019 3h.75V1.5a.75.75 0 011.5 0V3h1.5V1.5a.75.75 0 011.5 0v1.598A3.016 3.016 0 0116.5 6c0 .863-.38 1.685-1.019 2.25A3.017 3.017 0 0116.5 10.5c0 1.37-.947 2.564-2.25 2.902V15a.75.75 0 01-.75.75zm0-3.75c.827 0 1.5-.673 1.5-1.5S14.327 9 13.5 9H9.75v3h3.75zm0-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H9.75v3h3.75z"}})])
          )
        }
      }
    