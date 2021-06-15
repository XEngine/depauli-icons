
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
            children.concat([_c('path',{attrs:{"d":"M2.251 23.249a2.252 2.252 0 01-1.969-3.337l9.747-17.995a2.251 2.251 0 013.942-.005l9.753 18.005a2.252 2.252 0 01-1.973 3.332h-19.5zm9.749-21a.749.749 0 00-.655.388L1.598 20.632a.747.747 0 00-.066.575.746.746 0 00.719.543h19.5a.75.75 0 00.656-1.112L12.655 2.633A.74.74 0 0012 2.249z"}}),_c('path',{attrs:{"d":"M12.001 19.499a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.717.717 0 010-.262c.06-.513.47-.922.983-.982a.702.702 0 01.261 0c.513.06.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.114.993zM12.001 15.749a.75.75 0 01-.75-.75v-6.75a.75.75 0 011.5 0v6.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    