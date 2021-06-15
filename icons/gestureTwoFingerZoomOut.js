
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
            children.concat([_c('path',{attrs:{"d":"M15.75 23.998a.744.744 0 01-.671-.415.748.748 0 01-.041-.572l.645-1.934a4.752 4.752 0 00-.558-4.161.746.746 0 01-.032-.779l2.178-3.937a.753.753 0 00-.655-1.115.756.756 0 00-.661.387l-2.692 4.867a.75.75 0 01-.778.377l-1.362-.227a.746.746 0 01-.626-.74v-6a.75.75 0 00-1.5 0V18a.745.745 0 01-.75.75.753.753 0 01-.335-.079l-1.175-.588a.886.886 0 00-1.189.399.893.893 0 00.239 1.088l3.797 3.094a.746.746 0 01.272.506.748.748 0 01-1.219.658l-3.792-3.091a2.4 2.4 0 01-.639-2.924 2.377 2.377 0 012.141-1.323c.371 0 .728.084 1.061.25l.09.045V9.748c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v5.365l.211.035 2.435-4.403a2.257 2.257 0 013.061-.88 2.256 2.256 0 01.88 3.061l-1.967 3.554a6.265 6.265 0 01.489 5.07l-.645 1.934a.75.75 0 01-.712.514zM19.459 7.362a.746.746 0 01-.67-.413.746.746 0 01-.042-.573.747.747 0 01.375-.435l2.309-1.162a26.143 26.143 0 00-7.244-1.66.751.751 0 01-.686-.809.745.745 0 01.808-.686c2.526.209 5.003.762 7.379 1.647l-1.016-2.02a.75.75 0 011.34-.674l1.906 3.79a.747.747 0 01-.333 1.007l-3.79 1.907a.737.737 0 01-.336.081zM4.539 7.362a.76.76 0 01-.337-.08L.412 5.375a.747.747 0 01-.375-.435.746.746 0 01.042-.573L1.985.577A.746.746 0 012.992.244a.746.746 0 01.333 1.007l-1.016 2.02a27.608 27.608 0 017.378-1.646c.022-.002.042-.002.062-.002.394 0 .715.296.747.688a.751.751 0 01-.686.809c-2.48.205-4.913.762-7.244 1.66l2.309 1.162c.179.09.312.244.375.435a.746.746 0 01-.711.985z"}})])
          )
        }
      }
    