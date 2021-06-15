
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
            children.concat([_c('path',{attrs:{"d":"M19.51 21.75a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75V6.753H2.26V19.5c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5A2.252 2.252 0 01.76 19.5V3A2.252 2.252 0 013.01.75h18A2.252 2.252 0 0123.26 3v16.5a2.252 2.252 0 01-2.25 2.25h-1.5zm2.25-16.497V3a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.253h19.5z"}}),_c('path',{attrs:{"d":"M9.009 23.253a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121V13.5a3.754 3.754 0 013.75-3.75 3.754 3.754 0 013.75 3.75v.882a2.26 2.26 0 011.5 2.121v4.5a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zm5.25-1.503v-.75c0-1.24-1.009-2.25-2.25-2.25a2.252 2.252 0 00-2.25 2.25v.75h4.5z"}}),_c('circle',{attrs:{"cx":"12.009","cy":"18.783","r":"1.125"}})])
          )
        }
      }
    