
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
            children.concat([_c('path',{attrs:{"d":"M2.224 24a2.202 2.202 0 01-2.199-2.199v-7.602c0-1.212.986-2.199 2.199-2.199h19.551c1.212 0 2.199.987 2.199 2.199v7.602A2.202 2.202 0 0121.775 24H2.224zm0-10.5a.7.7 0 00-.699.699v7.602a.7.7 0 00.699.699h19.551a.7.7 0 00.699-.699v-7.602a.7.7 0 00-.699-.699H2.224zM17.275 10.5a.752.752 0 01-.611-.314l-3.239-4.535a2.973 2.973 0 01-2.8 0l-3.24 4.535a.75.75 0 11-1.22-.872L9.51 4.631A2.956 2.956 0 019.025 3c0-1.654 1.346-3 3-3s3 1.346 3 3c0 .586-.167 1.145-.485 1.631l3.345 4.683c.116.163.162.361.129.559s-.141.371-.304.487a.737.737 0 01-.435.14zm-5.25-9c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    