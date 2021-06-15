
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M15.127 18.319c-.22 0-.44-.058-.635-.169l-8.5-4.819c-.017-.009-.035-.021-.052-.032a1.566 1.566 0 01-.66-1.589 1.563 1.563 0 01.71-1.04l8.502-4.819a1.286 1.286 0 011.282.007c.448.262.726.769.726 1.325v9.636c0 .556-.278 1.063-.725 1.324a1.292 1.292 0 01-.648.176zm-8.353-6.368a.07.07 0 00-.019.037c-.004.02 0 .037.011.054L15 16.714V7.288l-8.226 4.663z"}})])
          )
        }
      }
    