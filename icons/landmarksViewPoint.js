
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
            children.concat([_c('path',{attrs:{"d":"M2.804 10.5a.75.75 0 010-1.5h5.689L.773 1.28C.631 1.139.553.95.553.75S.631.361.773.22a.747.747 0 011.061 0l7.72 7.72V2.25a.75.75 0 011.5 0v7.5a.735.735 0 01-.048.261l-.007.02a.76.76 0 01-.41.412l-.025.009a.737.737 0 01-.26.047h-7.5zM17.804 24a.75.75 0 01-.75-.75v-4.701L12.983 20.9a.754.754 0 01-1.025-.275.745.745 0 01.274-1.024l4.071-2.351-4.071-2.351a.743.743 0 01-.349-.455.752.752 0 011.1-.843l4.071 2.35V11.25a.75.75 0 011.5 0v4.701l4.071-2.351a.753.753 0 011.1.844.744.744 0 01-.349.455l-4.071 2.351 4.071 2.351a.74.74 0 01.349.455.753.753 0 01-1.1.843l-4.071-2.351v4.701a.75.75 0 01-.75.751z"}})])
          )
        }
      }
    