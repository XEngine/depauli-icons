
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
            children.concat([_c('path',{attrs:{"d":"M2.246 24.021a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h12a2.252 2.252 0 012.25 2.25.75.75 0 01-1.5 0 .75.75 0 00-.75-.75h-9.75v21h9.75c.414 0 .75-.336.75-.75a.75.75 0 011.5 0 2.252 2.252 0 01-2.25 2.25h-12zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h.75v-21h-.75zM21 24.021c-1.654 0-3-1.346-3-3v-2.188a.666.666 0 010-.124V6.083c-.002-.021-.004-.041-.004-.062 0-.117.029-.235.085-.343L20.31.475a.751.751 0 011.379.001l2.25 5.25c.04.093.061.193.061.295v15c0 1.655-1.346 3-3 3zm-1.5-3c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-1.5h-3v1.5zm3-3V6.771h-3v11.25h3zm-.387-12.75L21 2.675l-1.113 2.596h2.226z"}}),_c('path',{attrs:{"d":"M6.746 10.521a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-6zm5.25-1.5v-3h-4.5v3h4.5z"}})])
          )
        }
      }
    