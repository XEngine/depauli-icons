
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
            children.concat([_c('path',{attrs:{"d":"M12 5.63c-4.21 0-7.5 2.29-7.5 5.21s3.29 5.21 7.5 5.21 7.5-2.29 7.5-5.21-3.29-5.21-7.5-5.21zm0 8.93c-3.25 0-6-1.7-6-3.71s2.75-3.71 6-3.71 6 1.7 6 3.71-2.75 3.7-6 3.7z"}}),_c('path',{attrs:{"d":"M19.67 3.3A14 14 0 0012 1.13 14 14 0 004.33 3.3 9.06 9.06 0 000 10.84 9 9 0 003.81 18L2.3 21.85a.75.75 0 001 1l5.87-2.52a14.7 14.7 0 0010.5-1.92A9.06 9.06 0 0024 10.84a9.06 9.06 0 00-4.33-7.54zm-.83 13.82a13.21 13.21 0 01-9.61 1.65.74.74 0 00-.45 0l-4.43 1.96L5.42 18a.75.75 0 00-.28-.9 7.59 7.59 0 01-3.64-6.26 7.59 7.59 0 013.66-6.29A12.51 12.51 0 0112 2.63a12.52 12.52 0 016.84 1.93 7.59 7.59 0 013.66 6.29 7.58 7.58 0 01-3.66 6.27z"}})])
          )
        }
      }
    