
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-4.963 0-9-4.037-9-9a8.994 8.994 0 013-6.7V6c0-3.308 2.692-6 6-6s6 2.692 6 6v2.3a8.993 8.993 0 013 6.7c0 4.963-4.037 9-9 9zm0-16.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5zM12 6c1.592 0 3.134.416 4.5 1.209V6c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 007.5 6v1.209A8.932 8.932 0 0112 6z"}}),_c('path',{attrs:{"d":"M12 18c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    