
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
            children.concat([_c('path',{attrs:{"d":"M2.25 17.999a.75.75 0 010-1.5h4.209a2.243 2.243 0 002.219-1.88l.332-1.993a.749.749 0 01.74-.627h4.5a.75.75 0 000-1.5H7.5a.744.744 0 01-.638-.356.745.745 0 01-.033-.73l.587-1.174a.884.884 0 00-.794-1.284.89.89 0 00-.692.333l-3.1 3.796a.748.748 0 01-1.327-.399.748.748 0 01.165-.55l3.094-3.789A2.396 2.396 0 017.2 5.527c.617.154 1.139.54 1.467 1.086.328.547.424 1.188.27 1.807-.04.169-.101.334-.179.49l-.045.089h5.536a2.252 2.252 0 012.25 2.25 2.252 2.252 0 01-2.25 2.25h-3.865l-.228 1.366a3.738 3.738 0 01-3.699 3.134H2.25z"}}),_c('path',{attrs:{"d":"M15.75 23.998a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v5.25h.322a17.328 17.328 0 004.153-10.328 17.313 17.313 0 00-3.213-10.984.751.751 0 011.219-.875 18.817 18.817 0 013.493 11.939 18.92 18.92 0 01-3.727 10.248h3.003a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    