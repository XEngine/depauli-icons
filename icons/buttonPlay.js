
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-22.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z"}}),_c('path',{attrs:{"d":"M10.635 17.998a2.372 2.372 0 01-1.685-.697 2.367 2.367 0 01-.7-1.687v-7.23a2.386 2.386 0 013.956-1.795l5.538 4.847a.748.748 0 01-.001 1.129l-5.537 4.844c-.435.38-.992.589-1.568.589h-.003zm.001-10.499a.886.886 0 00-.886.885v7.229c0 .236.093.459.26.626a.885.885 0 001.208.04L16.111 12l-4.893-4.282a.879.879 0 00-.582-.219z"}})])
          )
        }
      }
    