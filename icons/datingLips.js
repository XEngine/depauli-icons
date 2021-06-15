
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
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12.004 18.181c-3.549 0-7.097-1.65-10.545-4.905a2.249 2.249 0 01-.674-2.002 2.234 2.234 0 01.928-1.479l4.789-3.313a3.733 3.733 0 013.519-.399l1.701.679a.748.748 0 00.557 0l1.701-.679a3.745 3.745 0 013.526.399l4.8 3.321a2.234 2.234 0 01.949 1.903 2.237 2.237 0 01-.706 1.571c-3.449 3.253-6.997 4.904-10.545 4.904zm-9.516-5.997c3.161 2.984 6.362 4.496 9.516 4.496 3.153 0 6.354-1.512 9.515-4.496l.004-.004H2.485a.014.014 0 00.003.004zm18.452-1.503l-4.288-2.966a2.24 2.24 0 00-2.115-.24l-1.7.679a2.243 2.243 0 01-1.671-.001l-1.7-.679a2.282 2.282 0 00-.833-.158c-.458 0-.9.138-1.278.4l-4.287 2.966H20.94z"}})])
          )
        }
      }
    