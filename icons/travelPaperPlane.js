
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
            children.concat([_c('path',{attrs:{"d":"M8.256 19.373a.729.729 0 01-.123-.01 9.726 9.726 0 01-6.001-3.542.72.72 0 01-.105-.135 9.775 9.775 0 01-1.888-7.56 9.727 9.727 0 013.419-5.904 11.74 11.74 0 01.544-.419A9.667 9.667 0 0111.376.135a9.691 9.691 0 015.269 2.721.762.762 0 01.11.117 9.707 9.707 0 012.61 5.139.747.747 0 01-.739.877.748.748 0 01-.739-.625 8.213 8.213 0 00-1.678-3.742l-.423.569a2.252 2.252 0 00-.328 2.052l.258.764a.746.746 0 01-.47.951.75.75 0 01-.951-.47l-.259-.767a3.754 3.754 0 01.545-3.424l.574-.772a8.207 8.207 0 00-5.418-2.026 8.157 8.157 0 00-4.033 1.065l4.041 1.535a2.24 2.24 0 011.413 2.549l-.318 1.567a2.26 2.26 0 01-1.65 1.739l-1.711.427-1.015 2.53a3.725 3.725 0 01-1.401 1.727l-1.261.819a8.255 8.255 0 004.578 2.427.751.751 0 01.615.865.748.748 0 01-.739.624zM4.241 3.611a8.127 8.127 0 00-2.623 4.765 8.178 8.178 0 001.245 5.902l1.376-.893c.374-.25.664-.607.833-1.031L6.23 9.467a.749.749 0 01.514-.448L8.823 8.5a.751.751 0 00.546-.579l.317-1.571a.746.746 0 00-.471-.85L4.241 3.611z"}}),_c('path',{attrs:{"d":"M17.487 23.997a1.5 1.5 0 01-1.421-1.025l-1.362-4.081-4.085-1.366a1.502 1.502 0 01-.091-2.812l12.441-5.069a.744.744 0 01.814.164.748.748 0 01.164.813l-5.068 12.441a1.499 1.499 0 01-1.392.935zm.002-1.5l4.396-10.792-10.791 4.397 3.997 1.337 2.427-2.427a.744.744 0 01.53-.22.752.752 0 01.53 1.281l-2.424 2.424 1.335 4z"}})])
          )
        }
      }
    