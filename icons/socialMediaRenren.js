
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
            children.concat([_c('path',{attrs:{"d":"M22.84 19.58a.75.75 0 00-.34-.48C15.06 14.52 15.06 8.54 15.06 1a.75.75 0 00-.61-.74 13 13 0 00-4.89 0 .75.75 0 00-.62.74c0 7.57 0 13.54-7.44 18.13a.75.75 0 00-.23 1.06 12.94 12.94 0 003.86 3.73.75.75 0 00.79 0A17.46 17.46 0 0012 17.6a17.55 17.55 0 006.08 6.28.75.75 0 00.79 0 12.94 12.94 0 003.86-3.73.75.75 0 00.11-.57zm-4.38 2.78a17.17 17.17 0 01-5.81-6.62.75.75 0 00-.66-.39.75.75 0 00-.66.39 17.05 17.05 0 01-5.8 6.62A11.47 11.47 0 013 19.94c7.26-4.83 7.47-11.11 7.48-18.33a11.39 11.39 0 013.11 0c0 7.23.21 13.51 7.48 18.33a11.45 11.45 0 01-2.61 2.42z"}})])
          )
        }
      }
    