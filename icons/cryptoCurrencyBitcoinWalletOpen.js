
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
            children.concat([_c('path',{attrs:{"d":"M14.435 24.004a2.78 2.78 0 01-.759-.105l-9.042-2.458a4.457 4.457 0 01-3.153-4.165V7.312a3.469 3.469 0 01.818-2.308.75.75 0 01.193-.212A3.484 3.484 0 014.877 3.75h9.392a.75.75 0 010 1.5H5.177l8.916 2.534a4.542 4.542 0 013.137 4.199v5.267h1.438a2.367 2.367 0 002.352-2.312v-3.685a.75.75 0 011.5 0v3.7c-.041 2.097-1.771 3.797-3.857 3.797H17.23v2.228a2.786 2.786 0 01-.635 2.012 2.787 2.787 0 01-2.16 1.014zM3.243 6.26c-.18.314-.271.668-.263 1.035v9.965a2.94 2.94 0 002.073 2.741l9.023 2.453a1.315 1.315 0 00.483.045c.346-.033.659-.198.881-.466.222-.268.326-.606.294-.952a.753.753 0 01-.003-.07V12a3.014 3.014 0 00-2.076-2.782L3.243 6.26z"}}),_c('path',{attrs:{"d":"M11.979 18.75c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM18.769 9a.75.75 0 01-.75-.75h-.75a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h.75a.75.75 0 011.5 0A2.252 2.252 0 0121.769 3c0 .555-.209 1.09-.575 1.5.365.41.575.945.575 1.5a2.252 2.252 0 01-2.25 2.25.75.75 0 01-.75.75zm.75-2.25a.75.75 0 000-1.5h-1.5v1.5h1.5zm0-3a.75.75 0 000-1.5h-1.5v1.5h1.5z"}})])
          )
        }
      }
    