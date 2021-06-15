
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
            children.concat([_c('path',{attrs:{"d":"M16.657 19.004a.886.886 0 01-.351-.072c-.131-.057-.556-.293-.556-.938v-2.745H2.25A2.253 2.253 0 010 12.999v-3a2.252 2.252 0 012.25-2.25h13.5V5.01c0-.645.426-.881.557-.938a.91.91 0 01.354-.073c.176 0 .442.053.711.303l6.167 6.117c.274.254.446.631.461 1.026.015.4-.127.783-.399 1.077-.031.032-.055.057-.08.08l-6.131 6.082c-.286.266-.555.32-.733.32zM2.25 9.249a.75.75 0 00-.75.75v3c0 .414.336.75.75.75H16.5a.75.75 0 01.75.75v2.212l5.265-5.223L17.25 6.29v2.209a.75.75 0 01-.75.75H2.25z"}})])
          )
        }
      }
    