
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
            children.concat([_c('path',{attrs:{"d":"M18.752 24.004a.75.75 0 01-.75-.75v-.644A2.247 2.247 0 0017 20.734l-4.248-2.833v5.349a.75.75 0 01-1.5 0v-5.349l-4.248 2.833a2.246 2.246 0 00-1.002 1.875v.645a.75.75 0 01-1.5 0v-.644a3.743 3.743 0 011.67-3.124l5.08-3.387V14.25h-2.25A2.252 2.252 0 016.752 12V6a2.252 2.252 0 012.25-2.25h2.25v-3a.75.75 0 011.5 0v3h2.25A2.252 2.252 0 0117.252 6v6a2.252 2.252 0 01-2.25 2.25h-2.25v1.849l5.08 3.387a3.742 3.742 0 011.67 3.125v.643c0 .413-.337.75-.75.75zM9.002 5.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h6a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-6zM19.838 11.05a.746.746 0 01-.739-.624.743.743 0 01.127-.56 1.502 1.502 0 000-1.733.747.747 0 01.612-1.184c.243 0 .472.118.612.317a3.005 3.005 0 010 3.467.747.747 0 01-.612.317z"}}),_c('path',{attrs:{"d":"M21.002 14.059a.749.749 0 01-.429-1.365 4.49 4.49 0 001.121-1.121 4.47 4.47 0 00.735-3.365 4.47 4.47 0 00-1.856-2.901.751.751 0 01.428-1.366.75.75 0 01.428.134 5.958 5.958 0 012.475 3.868 5.956 5.956 0 01-.98 4.486 5.966 5.966 0 01-1.495 1.495.739.739 0 01-.427.135zM4.165 11.05a.75.75 0 01-.612-.316 3.005 3.005 0 010-3.467.749.749 0 011.351.307.743.743 0 01-.127.56 1.502 1.502 0 000 1.733.752.752 0 01-.178 1.046.757.757 0 01-.434.137z"}}),_c('path',{attrs:{"d":"M3.001 14.059a.75.75 0 01-.429-.135 6.008 6.008 0 01.001-9.849.749.749 0 011.045.187.751.751 0 01-.187 1.044 4.473 4.473 0 00-1.857 2.901 4.47 4.47 0 00.735 3.365c.305.439.682.816 1.121 1.122a.748.748 0 01-.429 1.365zM12.002 11.25c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    