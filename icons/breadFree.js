
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
            children.concat([_c('path',{attrs:{"d":"M12 23.986a11.92 11.92 0 01-8.449-3.487l-.034-.03a.387.387 0 01-.032-.037A11.905 11.905 0 010 11.986c0-6.617 5.383-12 12-12a11.92 11.92 0 018.43 3.468.397.397 0 01.098.099A11.916 11.916 0 0124 11.986c0 6.617-5.383 12-12 12zm-6.87-4.069A10.45 10.45 0 0012 22.486c5.79 0 10.5-4.71 10.5-10.5 0-2.534-.909-4.958-2.569-6.87L5.13 19.917zM12 1.486c-5.79 0-10.5 4.71-10.5 10.5 0 2.534.909 4.958 2.569 6.87L18.87 4.055A10.453 10.453 0 0012 1.486z"}}),_c('path',{attrs:{"d":"M7.5 13.486a.75.75 0 01-.75-.75v-.845A3.018 3.018 0 014.5 8.986c0-1.654 1.346-3 3-3h5.25a.75.75 0 010 1.5H7.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75zM11.25 17.986a.75.75 0 010-1.5h4.5v-5.25a.75.75 0 01.75-.75c.827 0 1.5-.673 1.5-1.5a.75.75 0 011.5 0 3.018 3.018 0 01-2.25 2.905v5.345a.75.75 0 01-.75.75h-5.25z"}})])
          )
        }
      }
    