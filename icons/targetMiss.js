
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
            children.concat([_c('path',{attrs:{"d":"M8.26 17.24a.766.766 0 01-.268-.049 5.926 5.926 0 01-3.313-3.136 5.921 5.921 0 01-.125-4.56 5.928 5.928 0 015.565-3.829c.397 0 .798.04 1.191.118a.75.75 0 01-.291 1.471 4.581 4.581 0 00-1.76-.009 4.432 4.432 0 00-3.305 2.783c-.426 1.113-.392 2.325.094 3.412s1.366 1.921 2.479 2.346a.752.752 0 01-.267 1.453z"}}),_c('path',{attrs:{"d":"M8.221 21.557a.71.71 0 01-.153-.016 10.061 10.061 0 01-6.411-4.355A10.061 10.061 0 01.203 9.572a10.14 10.14 0 018.568-7.985 10.235 10.235 0 012.967.042.75.75 0 01-.235 1.482 8.738 8.738 0 00-2.533-.036 8.637 8.637 0 00-7.297 6.802 8.573 8.573 0 001.238 6.486 8.57 8.57 0 005.462 3.71.748.748 0 01-.152 1.484zM17.247 24.003a6.746 6.746 0 01-6.665-5.683 6.708 6.708 0 011.198-5.026 6.708 6.708 0 014.401-2.706 6.763 6.763 0 011.071-.085 6.719 6.719 0 016.661 5.684 6.709 6.709 0 01-1.198 5.026 6.71 6.71 0 01-5.468 2.79zm-5.184-5.922a5.245 5.245 0 006.013 4.355 5.217 5.217 0 003.423-2.104 5.21 5.21 0 00.932-3.908c-.403-2.521-2.631-4.421-5.182-4.421a5.28 5.28 0 00-.831.066 5.214 5.214 0 00-3.423 2.105 5.207 5.207 0 00-.932 3.907z"}}),_c('path',{attrs:{"d":"M19.499 20.25a.743.743 0 01-.53-.22l-1.72-1.72-1.72 1.72a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.72-1.72-1.72-1.72a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72 1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.72 1.72 1.72 1.72a.752.752 0 01-.53 1.281zM9.749 12.609a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3.993-3.992.531-3.506a.753.753 0 01.216-.423L17.207.216a.742.742 0 01.748-.182.751.751 0 01.514.575l.407 2.124L21 3.139a.75.75 0 01.394 1.262L18.201 7.65a.744.744 0 01-.423.216l-3.506.531-3.993 3.993a.746.746 0 01-.53.219zm5.061-5.811l2.496-.378 2.035-2.071-1.248-.239a.746.746 0 01-.595-.595l-.239-1.248-2.07 2.035-.379 2.496z"}})])
          )
        }
      }
    