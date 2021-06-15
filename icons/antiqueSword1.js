
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
            children.concat([_c('path',{attrs:{"d":"M10.534 14.217a.743.743 0 01-.53-.22.744.744 0 010-1.06l7.133-7.133a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-7.133 7.133a.744.744 0 01-.53.22z"}}),_c('path',{attrs:{"d":"M2.304 24.002c-.617 0-1.196-.24-1.631-.676a2.307 2.307 0 01.004-3.258l3.448-3.442c-1.431-2.045-1.474-3.538-1.474-3.708a.75.75 0 011.5-.003c0 .004.047 1.088 1.056 2.631l.046-.046a2.37 2.37 0 00.689-1.668v-.91c0-.198.08-.391.22-.53l10.3-10.3a1.52 1.52 0 01.589-.367L21.994.078a1.517 1.517 0 01.968.001 1.526 1.526 0 01.961 1.931l-1.635 4.94a1.54 1.54 0 01-.369.595l-10.3 10.299a.744.744 0 01-.53.22h-.909a2.37 2.37 0 00-1.669.689l-.044.044c1.54 1.004 2.618 1.053 2.629 1.053a.751.751 0 01-.013 1.5c-.171 0-1.658-.048-3.699-1.471L3.932 23.33a2.293 2.293 0 01-1.628.672zm-.568-2.872a.805.805 0 001.136 1.139l3.33-3.329a13.798 13.798 0 01-1.135-1.133L1.736 21.13zm4.393-4.385a12.916 12.916 0 001.135 1.132l.185-.185a3.884 3.884 0 012.727-1.129h.601l10.08-10.08L22.5 1.534c.004-.013-.004-.03-.015-.034l-.008-.001a.02.02 0 00-.008.001l-4.94 1.646L7.442 13.233v.598a3.875 3.875 0 01-1.129 2.731l-.184.183z"}})])
          )
        }
      }
    