
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
            children.concat([_c('path',{attrs:{"d":"M16.679 23.25a.75.75 0 01-.75-.75v-2.25a.747.747 0 01.75-.75c.042 0 .083.003.125.01l1.005.168a2.23 2.23 0 001.678-.388 2.236 2.236 0 00.943-1.832V15c0-.345.233-.644.568-.728l.935-.234a.75.75 0 00.445-1.145l-1.821-2.728a.744.744 0 01-.126-.417V9c0-3.313-2.943-6.186-6.845-6.683a.74.74 0 01-.498-.285.75.75 0 01.689-1.203c4.722.602 8.152 4.038 8.152 8.171v.523l1.696 2.54c.144.216.249.454.312.706a2.232 2.232 0 01-.256 1.702c-.31.515-.802.878-1.385 1.023l-.366.091v1.873a3.727 3.727 0 01-1.571 3.053 3.72 3.72 0 01-2.171.699c-.208 0-.419-.018-.626-.052l-.132-.022V22.5a.752.752 0 01-.751.75zM7.679 23.25a.75.75 0 01-.75-.75v-3.792a9.773 9.773 0 01-4.466-7.395.745.745 0 01.684-.81.744.744 0 01.81.684 8.247 8.247 0 004.096 6.449.752.752 0 01.375.65V22.5a.75.75 0 01-.749.75zM6.179 11.25a.753.753 0 01-.434-.14l-.046-.036a.889.889 0 01-.056-.051l-.029-.029-5.25-6a.746.746 0 01-.131-.214l-.012-.034a.778.778 0 01-.013-.447.74.74 0 01.124-.253L2.579 1.05a.753.753 0 01.6-.3h6c.235 0 .459.112.6.3l2.25 3a.735.735 0 01.121.253.744.744 0 01.025.243.68.68 0 01-.041.2l-.011.033a.732.732 0 01-.102.177c-.009.013-.018.026-.028.037l-5.251 6.001a.78.78 0 01-.217.169l-.044.023a.822.822 0 01-.112.038c-.016.006-.022.007-.039.01a.743.743 0 01-.151.016zm.75-2.746L9.776 5.25H6.929v3.254zm-1.5 0V5.25H2.582l2.847 3.254zm4.5-4.754l-1.125-1.5H6.929v1.5h3zm-4.5 0v-1.5H3.554l-1.125 1.5h3z"}})])
          )
        }
      }
    