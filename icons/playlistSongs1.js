
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
            children.concat([_c('path',{attrs:{"d":"M.744 1.5a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H.744zM.744 7.5a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H.744zM.744 13.5a.75.75 0 010-1.5h9.75a.75.75 0 010 1.5H.744zM.744 19.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M13.494 24c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5c1.115 0 2.182.419 3 1.152V2.25a.75.75 0 011.5 0v.946l3.217 1.964a.68.68 0 01.068.047c2.737 2.115 3.476 5.176 1.883 7.799a.754.754 0 01-1.03.252.75.75 0 01-.252-1.03c1.182-1.945.612-4.169-1.486-5.809l-2.399-1.465V19.5a4.506 4.506 0 01-4.501 4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.345-3-3-3z"}})])
          )
        }
      }
    