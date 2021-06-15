
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
            children.concat([_c('path',{attrs:{"d":"M20.4 5.27a.75.75 0 00.37-1.4 18 18 0 00-17.53 0A.75.75 0 104 5.16a16.5 16.5 0 0116 0 .75.75 0 00.4.11zM6.76 9.73a.75.75 0 001 1.12 6.53 6.53 0 018.49 0 .75.75 0 001-1.12 8.06 8.06 0 00-10.49 0z"}}),_c('path',{attrs:{"d":"M18.73 8.2a.75.75 0 00.42-1.37A13.08 13.08 0 005 6.73.75.75 0 005.82 8a11.54 11.54 0 0112.49.09.74.74 0 00.42.11zM22.5 22.14a.75.75 0 00.19-.58 10.75 10.75 0 00-21.39 0 .75.75 0 00.75.83h4.82a.75.75 0 00.73-.6 4.5 4.5 0 014.4-3.57 4.93 4.93 0 014.4 3.6.75.75 0 00.73.57h4.82a.75.75 0 00.55-.25zm-4.83-1.25A6.44 6.44 0 0012 16.72a6 6 0 00-5.71 4.18H2.92a9.26 9.26 0 0118.16 0z"}})])
          )
        }
      }
    