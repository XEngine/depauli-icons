
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0V3h12c.836 0 1.516.679 1.517 1.514v1.469A1.52 1.52 0 0113.5 7.5h-12V9h12c.836 0 1.516.679 1.517 1.514v1.469c0 .837-.681 1.517-1.517 1.517h-12V15h17.983c.836 0 1.516.679 1.517 1.514v1.469a1.52 1.52 0 01-1.517 1.517H1.5v3h21.75a.75.75 0 010 1.5H.75zm18.733-6l.017-1.483-18-.017V18h17.983zM13.5 12l.017-1.483L1.5 10.5V12h12zm0-6l.017-1.483L1.5 4.5V6h12z"}})])
          )
        }
      }
    