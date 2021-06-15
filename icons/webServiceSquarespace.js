
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
            children.concat([_c('path',{attrs:{"d":"M15.47 7a.75.75 0 10-1.06-1.06l-7.86 7.87a2.81 2.81 0 01-4-4l5.78-5.72a2.79 2.79 0 012-.82 2.78 2.78 0 011.46.42 4.29 4.29 0 00-.44.36l-7.5 7.49A.75.75 0 104.9 12.6l7.5-7.49a2.87 2.87 0 014 0A.75.75 0 1017.43 4a4.19 4.19 0 00-4.17-1.1 4.27 4.27 0 00-2.95-1.18A4.28 4.28 0 007.27 3L1.51 8.78a4.31 4.31 0 006.09 6.1zM19.44 7.87a4.28 4.28 0 00-3 1.26L8.49 17a.75.75 0 101.06 1.06l7.9-7.9a2.87 2.87 0 014 0 2.81 2.81 0 010 4l-5.75 5.75a2.81 2.81 0 01-3.45.4 4.29 4.29 0 00.44-.36l7.43-7.43A.75.75 0 1019 11.47l-7.39 7.43a2.82 2.82 0 01-4 0A.75.75 0 106.57 20a4.19 4.19 0 004.16 1.09 4.3 4.3 0 006-.08l5.75-5.75a4.31 4.31 0 00-3-7.36z"}})])
          )
        }
      }
    