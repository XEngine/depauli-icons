
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
            children.concat([_c('path',{attrs:{"d":"M12 15a.75.75 0 01-.75-.75v-1.006a2.251 2.251 0 011.5-2.122 2.254 2.254 0 001.5-2.121c0-.601-.234-1.166-.659-1.591A2.232 2.232 0 0012 6.751c-.601 0-1.166.234-1.591.659A2.231 2.231 0 009.75 9a.75.75 0 01-1.5 0c0-1.002.391-1.943 1.099-2.651A3.725 3.725 0 0112 5.251a3.755 3.755 0 013.75 3.75 3.756 3.756 0 01-2.5 3.535.752.752 0 00-.5.707v1.007A.75.75 0 0112 15z"}}),_c('circle',{attrs:{"cx":"12","cy":"17.625","r":"1.125"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    