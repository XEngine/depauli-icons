
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
            children.concat([_c('path',{attrs:{"d":"M8.817 20.419a.766.766 0 01-.268-.049 19.176 19.176 0 00-6.41-1.258A2.26 2.26 0 010 16.85V3.5a2.237 2.237 0 01.655-1.591 2.234 2.234 0 011.589-.663l.056.002.108.004c3.807.202 6.224 1.144 7.579 1.899.85.474 1.536 1.012 2.012 1.578.476-.565 1.162-1.104 2.012-1.578 1.356-.755 3.774-1.698 7.592-1.9.041-.003.096-.004.148-.005a2.235 2.235 0 011.593.663c.425.426.657.992.656 1.593v8.226a.75.75 0 01-1.5 0V3.5a.75.75 0 00-.748-.754l-.04.001c-6.303.334-8.962 2.804-8.962 3.731l.01 5.25a.746.746 0 01-.749.751.75.75 0 01-.751-.749l-.01-5.25c0-.928-2.657-3.398-8.932-3.73l-.052-.004a.76.76 0 00-.548.221.745.745 0 00-.218.531v13.357a.75.75 0 00.703.758c2.346.053 4.667.51 6.881 1.355a.752.752 0 01-.267 1.451z"}}),_c('path',{attrs:{"d":"M15.75 22.978a.657.657 0 01-.041-.002H14.25a2.252 2.252 0 01-2.25-2.25v-4.147l-.256.224a.749.749 0 01-1.059-.071.751.751 0 01.071-1.058l4.518-3.953a2.996 2.996 0 011.976-.739c.729 0 1.431.262 1.976.739l4.518 3.953a.748.748 0 11-.987 1.128l-.257-.223v4.147a2.252 2.252 0 01-2.25 2.25h-1.46a.657.657 0 01-.041.002H15.75zm4.5-1.502a.75.75 0 00.75-.75v-5.46l-2.762-2.417a1.5 1.5 0 00-.989-.369 1.5 1.5 0 00-.988.369L13.5 15.266v5.46c0 .414.336.75.75.75H15v-2.248c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v2.248h.75zm-2.25 0v-2.248a.75.75 0 00-1.5 0v2.248H18z"}})])
          )
        }
      }
    