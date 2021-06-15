
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
            children.concat([_c('path',{attrs:{"d":"M10.5 24.001c-1.654 0-3-1.346-3-3a3.004 3.004 0 014.5-2.598v-7.002c0-1.215.775-2.29 1.928-2.674l6.402-1.74c.262-.088.556-.136.853-.136A2.815 2.815 0 0124 9.673V18c0 1.654-1.346 3-3 3s-3-1.346-3-3a3.004 3.004 0 014.5-2.598v-5.73a1.321 1.321 0 00-1.32-1.319c-.141 0-.281.023-.416.068l-6.403 1.74c-.507.17-.862.67-.862 1.239V21a3.002 3.002 0 01-2.999 3.001zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm10.5-3c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM2.808 16.826a2.802 2.802 0 01-2.805-2.653 2.634 2.634 0 01.675-1.914 2.632 2.632 0 011.83-.875l.913-.054-.086-.916a2.653 2.653 0 012.646-2.912 2.803 2.803 0 012.797 2.522l.478 5.079a1.334 1.334 0 01-1.254 1.414l-5.037.304a2.833 2.833 0 01-.157.005zm3.103-7.822a1.15 1.15 0 00-1.083 1.265l.159 1.693a.75.75 0 01-.703.818l-1.693.1c-.31.017-.593.151-.798.38a1.144 1.144 0 00-.293.83l.004.055a1.305 1.305 0 001.374 1.178l4.864-.294-.458-4.859a1.301 1.301 0 00-1.3-1.168l-.073.002zM11.199 8.073c-.437 0-.834-.221-1.064-.591L7.866 3.798A2.515 2.515 0 018.705.342c.37-.224.795-.343 1.228-.343.828 0 1.608.439 2.037 1.145l.352.572.564-.373a2.375 2.375 0 013.356.744 2.51 2.51 0 01-.751 3.387L11.865 7.88a1.255 1.255 0 01-.666.193zM9.934 1.499a.875.875 0 00-.453.127l-.036.024c-.448.301-.58.902-.299 1.366l2.129 3.456 3.383-2.245c.448-.3.58-.899.3-1.363a.872.872 0 00-1.202-.296l-1.252.827a.75.75 0 01-1.053-.232l-.761-1.237a.876.876 0 00-.756-.427z"}})])
          )
        }
      }
    