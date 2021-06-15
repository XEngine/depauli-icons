
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
            children.concat([_c('path',{attrs:{"d":"M12 13.5c-2.481 0-4.5-2.019-4.5-4.5S9.519 4.5 12 4.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zM12 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}}),_c('circle',{attrs:{"cx":"12","cy":"9","r":"1.125"}}),_c('path',{attrs:{"d":"M18 24a.743.743 0 01-.53-.22l-4.72-4.72v4.189a.75.75 0 01-1.5 0V19.06l-4.72 4.72c-.141.142-.33.22-.53.22s-.389-.078-.53-.22a.744.744 0 010-1.06l4.872-4.872A8.967 8.967 0 013 9c0-4.963 4.037-9 9-9s9 4.037 9 9a8.965 8.965 0 01-7.342 8.847l4.872 4.872a.744.744 0 010 1.06A.75.75 0 0118 24zM12 1.5C7.865 1.5 4.5 4.865 4.5 9s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5z"}})])
          )
        }
      }
    