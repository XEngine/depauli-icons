
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
            children.concat([_c('path',{attrs:{"d":"M18.5 24c-1.792 0-3.25-1.458-3.25-3.25s1.458-3.25 3.25-3.25c1.153 0 2.231.63 2.809 1.624a1.252 1.252 0 001.191-1.249V13.5c0-.689-.561-1.25-1.25-1.25H4.5a.75.75 0 01-.75-.75V7a.75.75 0 01.75-.75h5.75v-2h-8.5a.25.25 0 00-.25.25v13.966c0 .211.105.406.269.528A3.229 3.229 0 014.5 17.5c1.792 0 3.25 1.458 3.25 3.25S6.292 24 4.5 24a3.254 3.254 0 01-3.234-3.571A2.165 2.165 0 010 18.466V4.5c0-.965.785-1.75 1.75-1.75H12.5a.75.75 0 010 1.5h-.75v6.5h3.5V6.5a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.25A2.754 2.754 0 0124 13.5v4.375a2.735 2.735 0 01-2.255 2.703A3.254 3.254 0 0118.5 24zm0-5c-.965 0-1.75.785-1.75 1.75s.785 1.75 1.75 1.75 1.75-.785 1.75-1.75S19.465 19 18.5 19zm-14 0c-.965 0-1.75.785-1.75 1.75s.785 1.75 1.75 1.75 1.75-.785 1.75-1.75S5.465 19 4.5 19zm15.25-8.25v-3.5h-3v3.5h3zm-9.5 0v-3h-5v3h5z"}}),_c('path',{attrs:{"d":"M11.5 24c-1.792 0-3.25-1.458-3.25-3.25s1.458-3.25 3.25-3.25 3.25 1.458 3.25 3.25S13.292 24 11.5 24zm0-5c-.965 0-1.75.785-1.75 1.75s.785 1.75 1.75 1.75 1.75-.785 1.75-1.75S12.465 19 11.5 19z"}})])
          )
        }
      }
    