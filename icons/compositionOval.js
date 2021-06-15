
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
            children.concat([_c('path',{attrs:{"d":"M12.644 22.509c-.222 0-.445-.003-.667-.01a21.38 21.38 0 01-10.835-2.594 2.284 2.284 0 01-1.139-1.957V6.049a2.271 2.271 0 011.12-1.948 21.431 21.431 0 0110.902-2.602 21.358 21.358 0 0110.837 2.594A2.287 2.287 0 0124 6.051v11.896a2.268 2.268 0 01-1.123 1.951 21.447 21.447 0 01-10.233 2.611zM12 21a19.946 19.946 0 0010.141-2.409.76.76 0 00.359-.645V6.052a.762.762 0 00-.376-.652 19.891 19.891 0 00-10.1-2.4A19.932 19.932 0 001.86 5.409a.757.757 0 00-.358.642v11.895a.763.763 0 00.377.653A19.914 19.914 0 0011.977 21H12z"}})])
          )
        }
      }
    