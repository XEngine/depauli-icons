
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
            children.concat([_c('path',{attrs:{"d":"M6 24.001a3.754 3.754 0 01-3.75-3.75v-16.5A3.754 3.754 0 016 .001h1.5a.75.75 0 010 1.5H6a2.252 2.252 0 00-2.25 2.25v14.02h12v-1.27a.75.75 0 011.5 0v3.75a3.754 3.754 0 01-3.75 3.75H6zm-2.25-3.75A2.252 2.252 0 006 22.501h7.5a2.252 2.252 0 002.25-2.25v-.98h-12v.98z"}}),_c('path',{attrs:{"d":"M15 13.899c-.349 0-.698-.082-1.006-.236l-4.5-2.249A2.239 2.239 0 018.25 9.4V4.5c0-.858.476-1.629 1.244-2.013l4.5-2.25a2.262 2.262 0 012.013 0l4.5 2.25A2.24 2.24 0 0121.751 4.5v4.9c0 .858-.477 1.628-1.244 2.012l-4.5 2.25a2.259 2.259 0 01-1.007.237zM9.75 9.401c0 .286.159.543.415.671l4.085 2.042V7.037l-4.5-2.25v4.614zm6 2.713l4.085-2.043a.746.746 0 00.415-.671V4.787l-4.5 2.25v5.077zM15 5.735l4.323-2.162-3.988-1.993a.74.74 0 00-.67 0l-3.988 1.994L15 5.735z"}})])
          )
        }
      }
    