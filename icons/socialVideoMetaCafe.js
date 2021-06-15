
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
            children.concat([_c('path',{attrs:{"d":"M24 16.4L18.57.77a.75.75 0 00-1.42 0l-3.87 11.89H.75A.75.75 0 00.32 14l13.82 9.51.05.05a.75.75 0 00.88 0l2.85-2.06 2.85 2.06a.75.75 0 001.15-.84l-1.08-3.32 2.86-2.16.06-.06a.74.74 0 00.14-.18v-.08a.74.74 0 000-.18.72.72 0 000-.08.74.74 0 000-.26zm-10.18-2.24a.75.75 0 00.71-.52l3.35-10.26 4.32 12.51h-2.48l-1.09-3.24a.75.75 0 00-1.42 0l-1.09 3.24H12.6a.75.75 0 00-.45 1.35L15 19.4l-.77 2.38-11.07-7.62zm5.69 4.37a.75.75 0 00-.26.83l.54 1.64-1.42-1a.75.75 0 00-.88 0l-1.42 1 .54-1.67a.75.75 0 00-.26-.83l-1.5-1.13h1.83a.75.75 0 00.71-.51l.55-1.63.55 1.63a.75.75 0 00.71.51H21z"}})])
          )
        }
      }
    