
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
            children.concat([_c('path',{attrs:{"d":"M3.18 21.61A9.32 9.32 0 009.44 24h11.87A2.69 2.69 0 0024 21.31V9.45A9.43 9.43 0 0021.48 3a.74.74 0 00-.21-.22A9.35 9.35 0 0014.55 0H9.44A9.46 9.46 0 000 9.45v5.1a9.44 9.44 0 003.18 7.06zM1.5 9.45A8 8 0 019.44 1.5h5.11a8 8 0 017.95 7.95v11.86a1.19 1.19 0 01-1.19 1.19H9.44a7.83 7.83 0 01-5.27-2 7.94 7.94 0 01-2.67-5.95z"}}),_c('path',{attrs:{"d":"M15.34 12.49a8.56 8.56 0 01-1.55 4.93.75.75 0 001.23.86 10.06 10.06 0 001.82-5.79 10.12 10.12 0 00-2.31-6.44.75.75 0 00-1.16 1 8.62 8.62 0 011.97 5.44zM6.92 18.49a.75.75 0 001-.25l2.49-4.1a.75.75 0 10-1.28-.78l-2.49 4.1a.75.75 0 00.28 1.03z"}}),_c('circle',{attrs:{"cx":"9.3","cy":"8.65","r":"1.5"}})])
          )
        }
      }
    