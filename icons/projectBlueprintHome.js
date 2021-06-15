
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75C0 1.682 1.682 0 3.75 0S7.5 1.682 7.5 3.75h14.25A2.252 2.252 0 0124 6v15.75A2.252 2.252 0 0121.75 24h-18zm18-1.5a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75H7.5v15c0 .823-.267 1.607-.752 2.25H21.75zm-18-4.5c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25S6 21.491 6 20.25 4.991 18 3.75 18zm0-16.5A2.252 2.252 0 001.5 3.75v13.502c.643-.485 1.427-.752 2.25-.752s1.607.267 2.25.752V3.75A2.252 2.252 0 003.75 1.5z"}}),_c('path',{attrs:{"d":"M12 18.75a.75.75 0 01-.75-.75v-4.149l-.27.225a.753.753 0 01-1.056-.096.746.746 0 01.096-1.056l4.5-3.75a.749.749 0 01.96 0l4.5 3.75a.744.744 0 01.267.508.75.75 0 01-1.227.644l-.27-.225V18a.75.75 0 01-.75.75h-6zm5.25-1.5v-4.649L15 10.726l-2.25 1.875v4.649h4.5z"}})])
          )
        }
      }
    