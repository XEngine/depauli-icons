
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
            children.concat([_c('path',{attrs:{"d":"M17.25 9a.75.75 0 010-1.5h4.189l-6.22-6.22A.746.746 0 0115.22.22a.749.749 0 011.06 0l6.22 6.22V2.25a.75.75 0 011.5 0v6a.744.744 0 01-.047.258l-.006.016A.758.758 0 0123.25 9h-6zM15.75 24a.753.753 0 01-.48-.174L6.479 16.5H3.75A3.754 3.754 0 010 12.75v-1.5A3.754 3.754 0 013.75 7.5h4.5a.75.75 0 01.48.174L17.521 15h2.729A3.754 3.754 0 0124 18.75v1.5A3.754 3.754 0 0120.25 24h-4.5zm4.5-1.5a2.252 2.252 0 002.25-2.25v-1.5a2.252 2.252 0 00-2.25-2.25h-3a.753.753 0 01-.48-.174L7.979 9H3.75a2.252 2.252 0 00-2.25 2.25v1.5A2.252 2.252 0 003.75 15h3a.75.75 0 01.48.174l8.791 7.326h4.229z"}})])
          )
        }
      }
    