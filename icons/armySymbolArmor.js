
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20.25A2.252 2.252 0 010 18V6a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 6v12a2.252 2.252 0 01-2.25 2.25H2.25zm0-15A.75.75 0 001.5 6v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M8.25 15.75A3.754 3.754 0 014.5 12a3.754 3.754 0 013.75-3.75h7.5A3.754 3.754 0 0119.5 12a3.754 3.754 0 01-3.75 3.75h-7.5zm0-6A2.252 2.252 0 006 12a2.252 2.252 0 002.25 2.25h7.5A2.252 2.252 0 0018 12a2.252 2.252 0 00-2.25-2.25h-7.5z"}})])
          )
        }
      }
    