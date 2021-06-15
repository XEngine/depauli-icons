
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm18-1.5a.75.75 0 00.75-.75V7.503h-6v.75a.75.75 0 01-1.5 0v-.75h-12v12.75c0 .414.336.75.75.75h11.25v-.75a.75.75 0 011.5 0v.75h5.25zm.75-15v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M15.01 13.503a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM15.01 18.003a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM9.01 18.003a.743.743 0 01-.53-.22l-3-3a.75.75 0 01-.163-.245l-.009-.024a.738.738 0 010-.523l.012-.032a.75.75 0 01.16-.238l3-3a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72h4.189a.75.75 0 010 1.5H7.82l1.72 1.72a.752.752 0 01-.53 1.282z"}})])
          )
        }
      }
    