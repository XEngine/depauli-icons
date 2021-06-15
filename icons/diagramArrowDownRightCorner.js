
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
            children.concat([_c('path',{attrs:{"d":"M14.364 24.001c-.632 0-.875-.417-.935-.545-.059-.128-.222-.583.187-1.067l1.745-2.071L.359 5.378A1.21 1.21 0 01.42 3.6L4.113.318C4.348.113 4.645 0 4.954 0c.344 0 .665.135.905.38l14.47 14.937 2.019-1.7c.209-.176.446-.268.684-.268.168 0 .301.045.383.083.128.06.545.302.547.933l.037 8.388a1.248 1.248 0 01-1.238 1.248h-8.397zm8.134-1.5l-.031-7.023-1.707 1.438a.75.75 0 01-1.022-.052L4.941 1.589l-3.308 2.94 15.276 15.213a.753.753 0 01.044 1.014L15.484 22.5h7.014z"}})])
          )
        }
      }
    