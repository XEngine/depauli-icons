
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
            children.concat([_c('path',{attrs:{"d":"M2.998 24c-.801 0-1.555-.312-2.121-.879S-.002 21.801-.002 21s.312-1.555.879-2.121L10.922 8.834 7.74 5.652l-.53.531a.748.748 0 01-1.061.001.75.75 0 010-1.061L8.269 3a.748.748 0 011.061-.001.75.75 0 010 1.061l-.53.531 3.182 3.182 3.252-3.252a3.015 3.015 0 01.461-3.643C16.261.312 17.014 0 17.816 0s1.555.312 2.121.879l3.182 3.182a3.003 3.003 0 010 4.243 2.98 2.98 0 01-2.121.879 2.957 2.957 0 01-1.522-.417L5.119 23.121A2.978 2.978 0 012.998 24zm-1.061-4.061c-.283.284-.439.66-.439 1.061s.156.777.439 1.061c.283.283.66.439 1.061.439s.777-.156 1.061-.439l10.045-10.045-2.121-2.121L1.937 19.939zm13.227-8.984l1.062-1.061-2.122-2.121-1.061 1.061 2.121 2.121zm2.122-2.122l1.06-1.06-2.121-2.121-1.061 1.06 2.122 2.121zm.53-7.333a1.501 1.501 0 00-1.061 2.56l3.182 3.182c.283.283.66.439 1.061.439s.777-.156 1.061-.439a1.501 1.501 0 000-2.121l-3.182-3.182a1.494 1.494 0 00-1.061-.439z"}})])
          )
        }
      }
    