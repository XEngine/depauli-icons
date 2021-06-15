
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
            children.concat([_c('path',{attrs:{"d":"M9.103 13.132c-.615 0-1.12-.5-1.125-1.116a1.12 1.12 0 01.992-1.126.74.74 0 01.133-.012 1.128 1.128 0 01.009 2.254H9.103zM15.75 21.753a.75.75 0 010-1.5h4.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75h-4.5a.75.75 0 010-1.5h4.5a2.252 2.252 0 012.25 2.25v15a2.252 2.252 0 01-2.25 2.25h-4.5z"}}),_c('path',{attrs:{"d":"M11.999 24.006c-.071 0-.143-.005-.214-.016l-8.997-1.285A1.505 1.505 0 011.5 21.22V3.728c0-.703.498-1.32 1.186-1.467L11.663.045A1.51 1.51 0 0113.5 1.507v21c0 .827-.673 1.499-1.501 1.499zM3.023 3.722L3 21.221l9.002 1.285-.002-21-8.977 2.216z"}})])
          )
        }
      }
    