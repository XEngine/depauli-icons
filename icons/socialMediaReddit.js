
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
            children.concat([_c('path',{attrs:{"d":"M15.09 17.5a6.82 6.82 0 01-6.19 0 .75.75 0 10-.75 1.3 7.79 7.79 0 003.85 1 7.79 7.79 0 003.83-1 .75.75 0 00-.75-1.3z"}}),_c('circle',{attrs:{"cx":"15.91","cy":"13.87","r":"1.5"}}),_c('circle',{attrs:{"cx":"8.09","cy":"13.87","r":"1.5"}}),_c('path',{attrs:{"d":"M2 14.86v.47c0 3.92 4.51 7.11 10 7.11s10-3.19 10-7.11v-.48a3.19 3.19 0 10-3.64-5 12.53 12.53 0 00-5.56-1.6 4.93 4.93 0 011.5-3.31 2.82 2.82 0 012.35-.29 2.9 2.9 0 10.3-1.49 4.19 4.19 0 00-3.53.57c-1.58 1.15-2 3.37-2.12 4.52a12.55 12.55 0 00-5.67 1.59A3.19 3.19 0 000 11.91a3.17 3.17 0 002 2.95zm17.53-11.8a1.4 1.4 0 11-1.4 1.4 1.4 1.4 0 011.4-1.4zM12 20.94c-4.71 0-8.54-2.52-8.54-5.61S7.29 9.72 12 9.72s8.54 2.52 8.54 5.61-3.83 5.61-8.54 5.61zm8.8-10.73a1.69 1.69 0 01.84 3.16 6.82 6.82 0 00-2-2.66 1.7 1.7 0 011.16-.5zm-17.61 0a1.7 1.7 0 011.19.5 6.82 6.82 0 00-2 2.67 1.7 1.7 0 01.84-3.17z"}})])
          )
        }
      }
    