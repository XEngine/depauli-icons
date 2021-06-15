
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
            children.concat([_c('path',{attrs:{"d":"M1.499 4.504a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.499 21.004a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM14.999 16.504a.75.75 0 01-.75-.75v-3.133A2.259 2.259 0 0112.75 10.5V8.254a.75.75 0 011.5 0V10.5a.75.75 0 001.5 0V8.254a.75.75 0 011.5 0V10.5a2.26 2.26 0 01-1.501 2.122v3.132a.75.75 0 01-.75.75zM7.499 16.504a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h.751c1.654 0 3 1.346 3 3s-1.346 3-3 3h-.001v2.25a.75.75 0 01-.75.75zm.751-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-.001l.001 3z"}})])
          )
        }
      }
    