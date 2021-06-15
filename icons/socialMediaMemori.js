
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
            children.concat([_c('path',{attrs:{"d":"M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 22.5A10.5 10.5 0 1122.5 12 10.51 10.51 0 0112 22.5z"}}),_c('path',{attrs:{"d":"M12.67 3.76a.75.75 0 00-.67-.41.75.75 0 00-.67.41L9.17 7.95l-4.66.76A.75.75 0 004.1 10l3.32 3.36L6.71 18a.75.75 0 001.08.78L12 16.67l4.22 2.11A.75.75 0 0017.3 18l-.71-4.66L19.9 10a.75.75 0 00-.41-1.27l-4.65-.76zm2.59 8.79a.75.75 0 00-.21.64l.55 3.6-3.26-1.63a.75.75 0 00-.67 0l-3.25 1.62.58-3.59a.75.75 0 00-.21-.64L6.19 10l3.6-.59a.75.75 0 00.55-.4L12 5.74 13.68 9a.75.75 0 00.54.4l3.59.59z"}})])
          )
        }
      }
    