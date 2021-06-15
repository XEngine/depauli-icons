
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h.75V7.132l-.309.224a.752.752 0 01-1.183-.723.746.746 0 01.3-.49l8.25-6a.754.754 0 01.883.001l8.25 6a.746.746 0 01.166 1.047.752.752 0 01-1.048.165l-.309-.224V19.5h.75a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H3.75zm15.75-1.5V21h-15v1.5h15zm-1.5-3V6.041l-6-4.363-6 4.363V19.5h1.5v-5.25a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v5.25H18zm-3 0V15h-2.25v2.25a.75.75 0 01-1.5 0V15H9v4.5h6z"}}),_c('path',{attrs:{"d":"M12 12c-2.068 0-3.75-1.682-3.75-3.75S9.932 4.5 12 4.5s3.75 1.682 3.75 3.75S14.068 12 12 12zm0-6c-1.241 0-2.25 1.009-2.25 2.25S10.759 10.5 12 10.5s2.25-1.009 2.25-2.25S13.241 6 12 6z"}})])
          )
        }
      }
    