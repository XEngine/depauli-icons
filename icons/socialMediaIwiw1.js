
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
            children.concat([_c('path',{attrs:{"d":"M17.15 13.61v-2.53l2.6-1.73a.75.75 0 00.33-.62V6.25l1.19-.59a.75.75 0 10-.67-1.34l-1.21.61-2.57-1.73a.75.75 0 00-.83 0l-2.94 2a.75.75 0 00-.33.62v2.5l-2.19 1.45L8 8.09a.75.75 0 00-.83 0L4.61 9.81l-1-.52a.75.75 0 10-.67 1.34l1 .5v2.47a.75.75 0 00.33.62l2.93 2a.75.75 0 00.83 0l2.52-1.68L12.72 16v2a.75.75 0 001.5 0v-2l2.6-1.73a.75.75 0 00.33-.66zm-.75-8.88l2.18 1.46v2.13L16.4 9.77 15.19 9l-1-.65V6.18zm-8.8 9.93l-2.19-1.45v-2.13L7.6 9.62l2.19 1.46v2.13zm5.87 0l-2.18-1.46v-2.12l2.18-1.46 1.21.81 1 .65v2.13zM13.76 19.48a.75.75 0 00-.58 0 1 1 0 000 1.88.75.75 0 00.58 0 1 1 0 000-1.88zM1 9.47a1 1 0 00.94-.71.75.75 0 00.06-.29 1 1 0 00-1-1 .75.75 0 00-.29.06 1 1 0 00-.71.94 1 1 0 001 1zM23 2.58a.75.75 0 00-.29.06 1 1 0 00-.71.94 1 1 0 001 1 1 1 0 00.94-.71.75.75 0 00.06-.29 1 1 0 00-1-1z"}})])
          )
        }
      }
    