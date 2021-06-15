
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
            children.concat([_c('circle',{attrs:{"cx":"8.625","cy":"7.128","r":"1.125"}}),_c('circle',{attrs:{"cx":"15.375","cy":"7.128","r":"1.125"}}),_c('path',{attrs:{"d":"M5.25 24.003A2.252 2.252 0 013 21.753v-9.618a2.262 2.262 0 00-1.5 2.118v6a.75.75 0 01-1.5 0v-6a3.743 3.743 0 013-3.673v-.08a8.924 8.924 0 013.32-6.977L4.641 1.191A.747.747 0 014.51.632a.745.745 0 01.74-.629c.241 0 .468.117.609.312l1.7 2.361a8.967 8.967 0 018.882 0l1.7-2.361a.755.755 0 011.047-.171.752.752 0 01.171 1.047L17.68 3.523A8.924 8.924 0 0121 10.5v.079c1.732.351 3 1.874 3 3.673v6a.75.75 0 01-1.5 0v-6c0-.96-.621-1.805-1.5-2.118v9.618a2.252 2.252 0 01-2.25 2.25H5.25zm-.75-2.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-9.75h-15v9.75zm15-11.253C19.5 6.364 16.135 3 12 3s-7.5 3.365-7.5 7.5h15z"}})])
          )
        }
      }
    