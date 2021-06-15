
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
            children.concat([_c('path',{attrs:{"d":"M3.86 6.59a.75.75 0 00.75.75H13a.75.75 0 000-1.5H4.61a.75.75 0 00-.75.75z"}}),_c('path',{attrs:{"d":"M17 13.66a.75.75 0 000 1.5h4l1.26 2.59a.75.75 0 001.35-.66L18.39 6.26a.71.71 0 00-.06-.07.71.71 0 00-.09-.12L18.11 6 18 5.91h-.56l-.13.09-.13.1a.72.72 0 00-.09.12.7.7 0 00-.06.07L12 16.66H2.81L5.2 11.9h5.07a.75.75 0 000-1.5H1a.75.75 0 000 1.5h2.52L.93 17.08a.75.75 0 00.67 1.08h10.83a.75.75 0 00.67-.42l4.61-9.44 2.62 5.36z"}})])
          )
        }
      }
    