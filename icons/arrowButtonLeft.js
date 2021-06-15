
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
            children.concat([_c('path',{attrs:{"d":"M15.279 24a1.47 1.47 0 01-1.037-.456L4.056 13.068a1.532 1.532 0 01-.003-2.133L14.274.425a1.488 1.488 0 012.11.032L19.07 3.22c.577.599.578 1.536.003 2.133l-6.464 6.648 6.46 6.644c.584.595.585 1.533.002 2.136l-2.69 2.767.003-.004-.026.027c-.29.279-.658.429-1.044.429h-.035zM5.131 11.978c-.011.012-.011.033.003.047l10.179 10.469 2.682-2.758c.01-.01.017-.027.003-.041l-6.972-7.171a.747.747 0 010-1.046l6.969-7.168c.011-.012.011-.033-.003-.047l-2.679-2.756L5.131 11.978z"}})])
          )
        }
      }
    