
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
            children.concat([_c('path',{attrs:{"d":"M11.991 24C6.098 24 .999 19.601.13 13.767a12.05 12.05 0 01-.027-3.35 2.227 2.227 0 01-.104-.671v-3a2.252 2.252 0 012.25-2.25h.386A11.93 11.93 0 0110.304.118c.57-.081 1.149-.123 1.72-.123 2.6 0 5.082.831 7.178 2.404a11.947 11.947 0 012.157 2.097h.389a2.252 2.252 0 012.25 2.25v3c0 .226-.035.451-.104.671a11.93 11.93 0 01-2.25 8.722 11.927 11.927 0 01-7.875 4.728c-.589.088-1.187.133-1.778.133zM1.498 11.996c0 .517.039 1.038.115 1.55.761 5.104 5.224 8.953 10.381 8.953.516 0 1.039-.039 1.554-.115a10.438 10.438 0 006.891-4.137 10.492 10.492 0 002.059-6.38 2.231 2.231 0 01-.75.129h-6a2.252 2.252 0 01-2.25-2.25v-.75h-3v.75a2.252 2.252 0 01-2.25 2.25h-6a2.23 2.23 0 01-.749-.129l-.001.129zm14.25-5.999a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-6zm-13.5 0a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-6zm11.25 1.5v-.75a2.252 2.252 0 012.25-2.25h3.598a10.513 10.513 0 00-1.045-.897 10.394 10.394 0 00-6.281-2.104 10.484 10.484 0 00-7.368 3.001h3.596a2.252 2.252 0 012.25 2.25v.75h3z"}}),_c('path',{attrs:{"d":"M11.992 21.006a8.172 8.172 0 01-3.555-.812 8.196 8.196 0 01-4.219-4.698 1.501 1.501 0 011.413-1.999h12.733a1.501 1.501 0 011.414 2 8.212 8.212 0 01-5.036 5.036 8.262 8.262 0 01-2.75.473zm-6.36-6.009a6.706 6.706 0 003.452 3.844 6.694 6.694 0 005.159.277 6.721 6.721 0 004.121-4.121H5.632z"}})])
          )
        }
      }
    