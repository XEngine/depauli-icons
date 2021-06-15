
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
            children.concat([_c('path',{attrs:{"d":"M2.25 23.25A2.252 2.252 0 010 21V7.5a2.252 2.252 0 012.25-2.25H3V4.5a.75.75 0 011.5 0v.75h2.459l.987-2.962A2.247 2.247 0 0110.08.75h3.838c.97 0 1.827.618 2.135 1.538l.987 2.962h2.46V4.5a.75.75 0 011.5 0v.75h.75A2.252 2.252 0 0124 7.5V21a2.252 2.252 0 01-2.25 2.25H2.25zm0-16.5a.75.75 0 00-.75.75V21c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H2.25zm13.209-1.5l-.829-2.488a.749.749 0 00-.711-.512h-3.838a.748.748 0 00-.711.513L8.541 5.25h6.918z"}}),_c('path',{attrs:{"d":"M5.25 12a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H5.25zM5.25 18a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H5.25z"}})])
          )
        }
      }
    