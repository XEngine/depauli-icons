
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
            children.concat([_c('path',{attrs:{"d":"M2.249 24a2.252 2.252 0 01-2.25-2.25V6a2.252 2.252 0 012.25-2.25h13.5V1.011c0-.645.425-.881.556-.938A.896.896 0 0116.659 0c.175 0 .441.052.711.302l6.119 6.068a1.546 1.546 0 01.108.104c.274.295.416.678.401 1.079a1.488 1.488 0 01-.479 1.044l-6.13 6.082c-.285.266-.555.32-.732.32a.885.885 0 01-.35-.072c-.131-.057-.558-.293-.558-.938V11.25h-8.25a.75.75 0 00-.75.75v9.75A2.252 2.252 0 014.499 24h-2.25zm0-18.75a.75.75 0 00-.75.75v15.75c0 .414.336.75.75.75h2.25a.75.75 0 00.75-.75V12a2.252 2.252 0 012.25-2.25h9a.75.75 0 01.75.75v2.206l5.233-5.191.014-.017-5.247-5.203V4.5a.75.75 0 01-.75.75H2.249z"}})])
          )
        }
      }
    