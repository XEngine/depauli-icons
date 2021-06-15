
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
            children.concat([_c('path',{attrs:{"d":"M2.251 23.249a2.252 2.252 0 01-1.969-3.337l9.747-17.995a2.251 2.251 0 013.942-.005l9.753 18.005a2.252 2.252 0 01-1.973 3.332h-19.5zm9.749-21a.749.749 0 00-.655.388L1.598 20.632a.747.747 0 00-.066.575.746.746 0 00.719.543h19.5a.75.75 0 00.656-1.112L12.655 2.633A.74.74 0 0012 2.249z"}}),_c('path',{attrs:{"d":"M12.001 20.249a.75.75 0 01-.75-.75v-3.75h-3.75a.75.75 0 010-1.5h3.75v-3.75a.75.75 0 011.5 0v3.75h3.75a.75.75 0 010 1.5h-3.75v3.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    