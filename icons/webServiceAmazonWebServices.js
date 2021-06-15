
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
            children.concat([_c('path',{attrs:{"d":"M23 5.65l-9.68 3a.75.75 0 00-.53.72v13.86a.75.75 0 00.75.75.76.76 0 00.25 0l9.68-3.43a.75.75 0 00.5-.71V6.36a.75.75 0 00-1-.72zm-.5 13.62l-8.18 2.9V9.92l8.18-2.54zM10.66 8.7L1 5.56a.74.74 0 00-.67.11.75.75 0 00-.33.61l.06 13.53a.75.75 0 00.5.7l9.62 3.38a.75.75 0 001-.71V9.42a.75.75 0 00-.52-.72zm-1 13.42l-8.1-2.85-.06-12L9.68 10zM23.05 3.71a.75.75 0 00-.54-.71L12.2 0a.76.76 0 00-.4 0L1.62 2.83a.75.75 0 000 1.44l10.17 3a.74.74 0 00.21 0h.2l10.3-2.84a.75.75 0 00.55-.72zM12 5.76L4.57 3.58l7.42-2 7.53 2.14z"}})])
          )
        }
      }
    