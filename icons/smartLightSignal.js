
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
            children.concat([_c('path',{attrs:{"d":"M4.045 22.213a.743.743 0 01-.53-.22 11.92 11.92 0 01-3.509-8.485c0-3.209 1.246-6.222 3.509-8.485A11.918 11.918 0 0112 1.514c3.209 0 6.222 1.246 8.485 3.509 4.679 4.679 4.679 12.292 0 16.97a.744.744 0 01-1.06 0 .752.752 0 010-1.061c4.094-4.094 4.094-10.755 0-14.849A10.429 10.429 0 0012 3.013c-2.808 0-5.445 1.09-7.425 3.07-4.094 4.094-4.094 10.755 0 14.849a.744.744 0 010 1.06.74.74 0 01-.53.221z"}}),_c('path',{attrs:{"d":"M6.166 20.092a.743.743 0 01-.53-.22 8.942 8.942 0 01-2.633-6.365c0-2.407.935-4.667 2.632-6.365A8.94 8.94 0 0112 4.511a8.94 8.94 0 016.364 2.632 8.938 8.938 0 012.633 6.365 8.939 8.939 0 01-2.632 6.365.374.374 0 01-.53.001l-.531-.53a.376.376 0 010-.53c2.925-2.925 2.925-7.684 0-10.609A7.446 7.446 0 0012 6.01a7.45 7.45 0 00-5.304 2.193c-2.924 2.925-2.924 7.684.001 10.608a.752.752 0 01-.531 1.281z"}}),_c('path',{attrs:{"d":"M12 22.508a.75.75 0 01-.75-.75v-.75A2.252 2.252 0 019 18.758V16.86a4.554 4.554 0 01-1.5-3.352c0-2.481 2.019-4.5 4.5-4.5 1.409 0 2.755.673 3.6 1.8a4.491 4.491 0 01-.6 6.047v1.903a2.252 2.252 0 01-2.25 2.25v.75a.75.75 0 01-.75.75zm-1.5-3.75c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-1.5h-3v1.5zm3.484-3a2.987 2.987 0 00.415-4.05 3.015 3.015 0 00-2.4-1.2c-1.654 0-3 1.346-3 3 0 .853.378 1.685 1.016 2.25h3.969z"}})])
          )
        }
      }
    