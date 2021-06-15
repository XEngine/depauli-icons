
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
            children.concat([_c('path',{attrs:{"d":"M12 20.091a.75.75 0 01-.317-.072c-.016-.007-.033-.014-.047-.022L.394 13.866a.801.801 0 01-.182-.139.766.766 0 01-.091-.115L.12 13.61a.794.794 0 01-.092-.198l-.011-.047a.708.708 0 01-.016-.114L0 13.205V7.068l.003-.047a.668.668 0 01.02-.129l.007-.033a.704.704 0 01.061-.15l.024-.039.015-.02a.746.746 0 01.081-.101l.04-.038a.743.743 0 01.104-.078c.015-.01.03-.02.044-.027l5.618-3.064a.742.742 0 01.142-.059l.048-.013a.742.742 0 01.526.072L12 6.214l5.266-2.872a.743.743 0 01.048-.022.637.637 0 01.144-.05.742.742 0 01.339.001.982.982 0 01.192.073l5.622 3.066c.012.007.026.015.039.025a.784.784 0 01.142.115c.032.033.06.069.085.107l.005.008a.735.735 0 01.117.359l.001.044v6.137a.767.767 0 01-.023.177c-.002.012-.002.013-.006.025a.815.815 0 01-.063.157.615.615 0 01-.196.227.633.633 0 01-.09.064l-11.263 6.144a.894.894 0 01-.144.059c-.007.002-.035.011-.043.012a.735.735 0 01-.172.021zm.75-2.013l3.309-1.805-3.309-1.805v3.61zm-1.5 0v-3.61l-3.309 1.805 3.309 1.805zM5.625 15.01V11.4l-3.309 1.805 3.309 1.805zm12.75 0l3.309-1.805-3.309-1.805v3.61zm-1.5-.001V11.4l-3.309 1.805 3.309 1.804zm-9.75 0l3.309-1.805L7.125 11.4v3.609zM1.5 11.942l3.309-1.805L1.5 8.331v3.611zm21 0v-3.61l-3.309 1.805 3.309 1.805zm-9.75-.001l3.309-1.805-3.309-1.805v3.61zm-1.5 0v-3.61l-3.309 1.805 3.309 1.805zM7.125 8.873l3.309-1.805-3.309-1.805v3.61zm9.75 0v-3.61l-3.309 1.805 3.309 1.805zm1.5 0l3.309-1.805-3.309-1.805v3.61zm-12.75 0v-3.61L2.316 7.068l3.309 1.805z"}})])
          )
        }
      }
    