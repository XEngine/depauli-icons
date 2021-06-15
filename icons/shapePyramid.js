
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
            children.concat([_c('path',{attrs:{"d":"M2.005 22.831c-.246 0-.491-.062-.708-.178a1.488 1.488 0 01-.727-.888.895.895 0 01-.019-.083 1.482 1.482 0 01.132-1.059L10.684 1.958a1.49 1.49 0 011.204-.78.75.75 0 01.246.002c.51.045.955.337 1.194.786l9.999 18.66c.114.216.175.457.176.699 0 .067-.008.132-.017.197a.869.869 0 01-.012.101l-.008.035a1.072 1.072 0 01-.025.084 1.502 1.502 0 01-1.433 1.088H2.005zm19.113-1.5l-9.113-5.858-9.112 5.858h18.225zm-18.121-1.85l8.258-5.309V4.069L2.997 19.481zm18.013-.002L12.755 4.073v10.098l8.255 5.308z"}})])
          )
        }
      }
    