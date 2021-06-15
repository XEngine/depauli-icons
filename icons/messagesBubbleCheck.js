
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
            children.concat([_c('path',{attrs:{"d":"M.708 24.002A.75.75 0 01.03 22.93l2.911-6.113c-.573-1-.987-2.079-1.231-3.208a11.18 11.18 0 011.538-8.472A11.174 11.174 0 0110.326.234c.784-.17 1.586-.256 2.382-.256 5.257 0 9.881 3.731 10.993 8.871a.75.75 0 11-1.466.317c-.964-4.455-4.971-7.688-9.527-7.688-.69 0-1.384.075-2.064.222a9.682 9.682 0 00-6.135 4.249 9.686 9.686 0 00-1.333 7.342 9.713 9.713 0 001.251 3.089.745.745 0 01.04.719l-2.174 4.567 4.567-2.175a.747.747 0 01.719.041 9.95 9.95 0 001.646.821.747.747 0 01.429.97.755.755 0 01-.97.429 11.322 11.322 0 01-1.541-.734L1.03 23.93a.76.76 0 01-.322.072z"}}),_c('path',{attrs:{"d":"M17.208 23.999c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75a.75.75 0 010 1.501c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25a.75.75 0 011.5 0 6.757 6.757 0 01-6.75 6.749z"}}),_c('path',{attrs:{"d":"M17.208 19.188c-.4 0-.777-.155-1.059-.437l-1.721-1.721a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72 5.469-5.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-5.47 5.47a1.49 1.49 0 01-1.059.438z"}})])
          )
        }
      }
    