
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
            children.concat([_c('path',{attrs:{"d":"M6 24c-1.654 0-3-1.346-3-3s1.346-3 3-3h2.668L5.242 8.863a.75.75 0 011.254-.772 7.499 7.499 0 005.488 2.409h.039a7.498 7.498 0 005.483-2.408.753.753 0 01.945-.131.75.75 0 01.309.902L15.332 18H18c1.654 0 3 1.346 3 3s-1.346 3-3 3H6zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H6zm7.73-1.5l2.684-7.159A9.034 9.034 0 0112.009 12a9.062 9.062 0 01-4.423-1.159L10.27 18h3.46z"}}),_c('path',{attrs:{"d":"M12 9C9.519 9 7.5 6.981 7.5 4.5S9.519 0 12 0s4.5 2.019 4.5 4.5S14.481 9 12 9zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}})])
          )
        }
      }
    