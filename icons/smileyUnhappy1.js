
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
            children.concat([_c('path',{attrs:{"d":"M12 19.5a.754.754 0 01-.71-.51.746.746 0 01.039-.573 7.457 7.457 0 016.719-4.167.75.75 0 11.001 1.5 5.964 5.964 0 00-5.376 3.333.75.75 0 01-.673.417z"}}),_c('circle',{attrs:{"cx":"15.75","cy":"10.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"7.5","cy":"10.5","r":"1.125"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    