
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M18 1.91a6.38 6.38 0 00-5.41 3 5.68 5.68 0 00-5.09-3 6 6 0 00-6 5.93 5.9 5.9 0 005.29 5.89v.92L.92 13.24A.75.75 0 000 14v6.24a.75.75 0 00.94.73l5.91-1.54v1.95a.75.75 0 00.75.75h9.31a.75.75 0 00.7-1l-2.71-7.32H18a5.93 5.93 0 100-11.9zm0 10.36h-4.2a.75.75 0 00-.7 1l2.71 7.32H8.35v-2.17a.75.75 0 00-.94-.73L1.5 19.24v-4.32l5.93 1.39a.75.75 0 00.92-.73V13a.75.75 0 00-.75-.75 4.43 4.43 0 11-.07-8.86c3.56 0 4.34 3.66 4.37 3.81a.78.78 0 00.75.61.75.75 0 00.73-.64A4.68 4.68 0 0118 3.41a4.43 4.43 0 110 8.86z"}}),_c('path',{attrs:{"d":"M7.53 5.85a2 2 0 102 2 2 2 0 00-2-2zm0 2.48A.49.49 0 118 7.84a.5.5 0 01-.47.49zM18.13 5.85a2 2 0 102 2 2 2 0 00-2-2zm0 2.48a.49.49 0 11.5-.49.5.5 0 01-.5.49z"}})])
          )
        }
      }
    