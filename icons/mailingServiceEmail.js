
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
            children.concat([_c('path',{attrs:{"d":"M23.25 2H.75a.75.75 0 00-.75.71v2.93a.75.75 0 00.4.67l11.25 5.87a.75.75 0 00.69 0L23.6 6.31a.75.75 0 00.4-.67V2.71a.75.75 0 00-.75-.71zm-.75 3.19L12 10.67 1.5 5.19V3.46h21z"}}),_c('path',{attrs:{"d":"M22.9 8.89L12 14.58 1.1 8.89a.75.75 0 00-1.1.66v11.74a.75.75 0 00.75.71h22.5a.75.75 0 00.75-.75V9.55a.75.75 0 00-1.1-.67zm-.4 8.64l-6-3.59 6-3.15zm-15-3.59l-6 3.59v-6.74zm-6 6.6v-1.27l7.6-4.52 2.56 1.33a.75.75 0 00.69 0l2.56-1.33 7.6 4.52v1.27z"}})])
          )
        }
      }
    