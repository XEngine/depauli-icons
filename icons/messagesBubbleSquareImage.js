
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24a.747.747 0 01-.75-.75V19.5H2.25A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v15a2.252 2.252 0 01-2.25 2.25H11.5l-5.8 4.35a.753.753 0 01-.45.15zm-3-22.5a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h3a.75.75 0 01.75.75v3l4.8-3.6a.753.753 0 01.45-.15h10.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M7.211 6c-.62 0-1.125-.505-1.125-1.125 0-.571.426-1.047.994-1.114a.808.808 0 01.205-.006l.053.006c.515.059.926.469.987.983a.717.717 0 010 .262A1.12 1.12 0 017.211 6zM5.25 13.5a.75.75 0 010-1.5h1.12l2.323-3.485a1.49 1.49 0 011.25-.668c.339 0 .671.116.935.328l.61.49 1.541-2.196a1.49 1.49 0 011.523-.611c.393.079.731.306.953.639l3.869 5.836c.01.014.025.041.032.056a.57.57 0 01.06.141.669.669 0 01.032.171.71.71 0 01-.087.401.59.59 0 01-.079.118c-.018.022-.033.041-.05.058a.738.738 0 01-.294.179l-.04.013a.803.803 0 01-.194.028H5.25zM17.353 12l-3.098-4.672-1.999 2.854a.754.754 0 01-1.084.155L9.94 9.346l.001.001h-.002L8.172 12h9.181z"}})])
          )
        }
      }
    