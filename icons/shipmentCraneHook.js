
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
            children.concat([_c('path',{attrs:{"d":"M12 24a4.505 4.505 0 01-4.5-4.5c0-2.188 1.621-4.073 3.75-4.435V13.5H10.1a1.5 1.5 0 01-1.152-.54l-3.35-4.021a1.511 1.511 0 01-.348-.96V1.5c0-.827.673-1.5 1.5-1.5h10.5c.827 0 1.5.673 1.5 1.5v6.478c0 .35-.124.691-.347.96l-3.352 4.022a1.498 1.498 0 01-1.151.54h-1.15v2.25a.75.75 0 01-.75.75c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3a.75.75 0 011.5 0c0 2.481-2.019 4.5-4.5 4.5zm-1.9-12h3.799l3.351-4.021V4.811l-7.168 7.168.018.021zM6.75 7.978l2.368 2.843 8.132-8.132V1.5h-4.189L6.75 7.811v.167zm0-2.289L10.939 1.5H6.75v4.189z"}})])
          )
        }
      }
    