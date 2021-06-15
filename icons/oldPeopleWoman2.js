
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
            children.concat([_c('path',{attrs:{"d":"M21.784 24a.756.756 0 01-.701-.482 9.65 9.65 0 00-5.182-5.44l-3.393 3.448c-.14.142-.335.224-.535.224s-.395-.082-.535-.224l-3.395-3.45a9.786 9.786 0 00-5.179 5.442.753.753 0 01-.969.433.752.752 0 01-.433-.968 11.26 11.26 0 016.498-6.498 11.175 11.175 0 013.996-.739 11.249 11.249 0 014.068.76 11.266 11.266 0 016.459 6.476.752.752 0 01-.699 1.018zm-9.811-4.07l2.354-2.392a9.694 9.694 0 00-4.711-.004l2.357 2.396zM11.973 14.999a6.007 6.007 0 01-5.996-6.157l.001-.038a6.011 6.011 0 011.821-4.11L4.834 2.89a.75.75 0 01.779-1.281L8.262 3.22A3.723 3.723 0 0110.19.451a3.757 3.757 0 011.779-.453 3.75 3.75 0 013.714 3.224l2.651-1.613a.751.751 0 011.118.818.742.742 0 01-.339.463l-2.966 1.804a5.999 5.999 0 011.821 4.09l.002.057c.002.053.004.105.004.159a6.007 6.007 0 01-6.001 5.999zM7.588 9.998c.46 2.005 2.283 3.502 4.385 3.502s3.924-1.496 4.385-3.5a4.063 4.063 0 01-1.002.125h-.028a4.503 4.503 0 01-3.354-1.767 4.475 4.475 0 01-3.333 1.766h-.033c-.348 0-.689-.043-1.02-.126zm4.385-3.999c.331 0 .618.212.716.527a3.007 3.007 0 002.699 2.099c.348 0 .707-.08 1.04-.233a4.492 4.492 0 00-2.678-3.526l-.057-.024a4.252 4.252 0 00-.847-.257 4.416 4.416 0 00-.363-.056l-.086-.009a4.365 4.365 0 00-.845-.001l-.069.007a4.727 4.727 0 00-.843.173 4.675 4.675 0 00-.386.141l-.058.025a4.319 4.319 0 00-.365.176l-.004.004a4.49 4.49 0 00-2.309 3.347c.336.152.703.232 1.073.232 1.219-.066 2.295-.91 2.666-2.098a.747.747 0 01.716-.527zM12.024 3a6.235 6.235 0 01.79.059l.138.021c.065.011.129.022.193.035l.096.02a5.87 5.87 0 01.776.223c.071.026.13.049.185.071a2.254 2.254 0 00-3.298-1.659 2.234 2.234 0 00-1.158 1.659c.054-.022.108-.044.163-.064l.024-.008c.169-.061.337-.113.505-.158l.043-.012c.066-.017.134-.032.202-.047l.12-.026a4.164 4.164 0 01.332-.056c.059-.008.118-.016.177-.022l.159-.015.168-.013a6.44 6.44 0 01.28-.009l.055-.001.05.002z"}})])
          )
        }
      }
    