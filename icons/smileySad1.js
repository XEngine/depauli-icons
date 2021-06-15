
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M18.048 18.75a.747.747 0 01-.672-.417 5.976 5.976 0 00-5.389-3.337c-.926 0-1.819.21-2.654.623a6.037 6.037 0 00-2.713 2.713.745.745 0 01-1.005.34.746.746 0 01-.338-1.005 7.539 7.539 0 013.39-3.391 7.416 7.416 0 013.319-.78 7.466 7.466 0 016.734 4.171.746.746 0 01-.339 1.005.754.754 0 01-.333.078z"}}),_c('circle',{attrs:{"cx":"8.25","cy":"9","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.75","cy":"9","r":"1.125"}})])
          )
        }
      }
    