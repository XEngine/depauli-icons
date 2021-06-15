
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.748.748 0 01-.727-.568l-.234-.932H5.461l-.233.932a.75.75 0 11-1.455-.364L6.539 12H4.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v.75h1.5V6.75H6a.752.752 0 01-.702-.486.755.755 0 01.208-.829l6-5.25a.753.753 0 01.988.001l6 5.25A.751.751 0 0118 6.75h-.75v3.75h1.5v-.75a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75h-2.04l2.767 11.068A.752.752 0 0119.5 24zm-2.325-3L12 16.325 6.824 21h10.351zm.625-1.458l-1.725-6.898-2.956 2.67 4.681 4.228zm-11.6 0l4.681-4.228-2.956-2.67L6.2 19.542zm5.8-5.238L14.55 12H9.449L12 14.304zm3.75-3.804V6.75h-7.5v3.75h7.5zm.254-5.25L12 1.746 7.996 5.25h8.008z"}})])
          )
        }
      }
    