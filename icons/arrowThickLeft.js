
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
            children.concat([_c('path',{attrs:{"d":"M12 21.999c-.343 0-.68-.12-.947-.339L.565 13.427a1.513 1.513 0 01-.014-2.342l10.514-8.253c.249-.204.585-.322.941-.329.411.004.786.163 1.066.449.281.286.433.664.429 1.064v2.985h9c.831.003 1.503.68 1.5 1.509v7.485a1.504 1.504 0 01-1.497 1.506h-9.003v2.992A1.5 1.5 0 0112 21.999zM1.492 12.253l10.5 8.236.01-3.739a.75.75 0 01.75-.75h9.75V8.507l-9.75-.006a.75.75 0 01-.75-.75V4.008l.001-.006-10.511 8.251z"}})])
          )
        }
      }
    