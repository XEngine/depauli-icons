
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.503H2.26v12.75zm19.5-14.25v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M12.01 16.503a.75.75 0 01-.75-.75v-4.189l-1.72 1.72a.744.744 0 01-1.06 0 .752.752 0 010-1.061l3-3a.74.74 0 01.245-.163l.025-.009a.737.737 0 01.521.001l.02.007c.097.04.179.095.25.166l2.999 2.999a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22l-1.72-1.72v4.189a.75.75 0 01-.75.749z"}}),_c('path',{attrs:{"d":"M7.51 19.503a2.252 2.252 0 01-2.25-2.25.75.75 0 011.5 0c0 .414.336.75.75.75h9c.414 0 .75-.336.75-.75a.75.75 0 011.5 0 2.252 2.252 0 01-2.25 2.25h-9z"}})])
          )
        }
      }
    