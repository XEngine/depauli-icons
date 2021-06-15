
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
            children.concat([_c('path',{attrs:{"d":"M12.75 23.999a2.252 2.252 0 01-2.25-2.25V16.46l-1.755 1.578a.748.748 0 01-1.059-.056.749.749 0 01.056-1.06l6.5-5.847a2.247 2.247 0 013.009 0l6.5 5.847a.747.747 0 01.057 1.059.75.75 0 01-1.059.055L21 16.466v5.283a2.252 2.252 0 01-2.25 2.25h-6zm-.75-2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-6.633l-3.251-2.925a.746.746 0 00-1.003 0L12 15.111v6.638z"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75v-21A1.5 1.5 0 013.528.098l6.222 2.53V.75a.75.75 0 011.5 0v2.488l2.796 1.137c.566.21.953.772.954 1.394V8.25a.75.75 0 01-1.5 0V5.77L2.981 1.495l.017 3.755H4.5a.75.75 0 010 1.5H3v1.5h3a.75.75 0 010 1.5H3v1.5h5.25a.75.75 0 010 1.5H3v9.75h5.25a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    