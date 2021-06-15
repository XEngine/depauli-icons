
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v.75h11.25A2.252 2.252 0 0115 3.75V6h7.406a1.544 1.544 0 011.592 1.454L24 19.5c-.05.852-.73 1.501-1.548 1.501l-.088-.002L9 21a2.252 2.252 0 01-2.25-2.25V16.5H1.5v6.75a.75.75 0 01-.75.75zm21.656-4.5l.03.001c.036 0 .064-.02.066-.047L22.5 7.524a.056.056 0 00-.048-.025L15 7.5v8.25a.75.75 0 01-.75.75c-1.781 0-3.32 1.288-3.672 3h11.828zM8.25 18.75c0 .414.336.75.75.75h.058a5.275 5.275 0 011.529-3H8.25v2.25zM13.5 15V3.75a.75.75 0 00-.75-.75H1.5v12h12z"}})])
          )
        }
      }
    