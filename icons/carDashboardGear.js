
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
            children.concat([_c('path',{attrs:{"d":"M12 24a3.016 3.016 0 01-2.902-2.25H5.902A3.016 3.016 0 013 24c-1.654 0-3-1.346-3-3s1.346-3 3-3c1.37 0 2.564.947 2.902 2.25h3.197a3.018 3.018 0 012.151-2.151v-3.197A3.016 3.016 0 019 12c0-1.37.947-2.564 2.25-2.902V5.901A3.016 3.016 0 019.099 3.75H5.902A3.016 3.016 0 013 6C1.346 6 0 4.654 0 3s1.346-3 3-3c1.37 0 2.564.947 2.902 2.25h3.197A3.014 3.014 0 0112 0c1.654 0 3 1.346 3 3 0 1.37-.947 2.564-2.25 2.902v3.197a3.018 3.018 0 012.151 2.151h3.197A3.016 3.016 0 0121 9c1.654 0 3 1.346 3 3s-1.346 3-3 3a3.016 3.016 0 01-2.902-2.25h-3.197a3.018 3.018 0 01-2.151 2.151v3.197A3.016 3.016 0 0115 21c0 1.654-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-9 0c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm18-9c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-9 0c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm0-9c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-9 0c-.827 0-1.5.673-1.5 1.5S2.173 4.5 3 4.5 4.5 3.827 4.5 3 3.827 1.5 3 1.5z"}})])
          )
        }
      }
    