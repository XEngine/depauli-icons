
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
            children.concat([_c('path',{attrs:{"d":"M8.93 17.6l2.37 5.93a.75.75 0 00.7.47.75.75 0 00.7-.48l2.3-5.9a9.07 9.07 0 10-6.06 0zM12 1.5a7.57 7.57 0 012.21 14.8.75.75 0 00-.48.45L12 21.21l-1.8-4.49a.75.75 0 00-.47-.44A7.57 7.57 0 0112 1.5z"}}),_c('path',{attrs:{"d":"M12 15.07a6 6 0 10-6-6 6 6 0 006 6zm0-10.5a4.5 4.5 0 11-4.5 4.5 4.5 4.5 0 014.5-4.5z"}}),_c('path',{attrs:{"d":"M12 11.82a2.75 2.75 0 10-2.75-2.75A2.75 2.75 0 0012 11.82zm0-4a1.25 1.25 0 11-1.25 1.25A1.25 1.25 0 0112 7.82z"}})])
          )
        }
      }
    