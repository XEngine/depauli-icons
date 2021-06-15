
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
            children.concat([_c('path',{attrs:{"d":"M12 23.746a2.235 2.235 0 01-1.591-.658L8.272 20.95H5.25A2.252 2.252 0 013 18.7v-3.018L.863 13.545a2.253 2.253 0 010-3.182L3 8.227V5.2a2.252 2.252 0 012.25-2.25h3.023L10.409.816c.425-.424.99-.658 1.591-.658.602 0 1.167.234 1.591.659l2.136 2.133h3.022A2.252 2.252 0 0121 5.2v3.026l2.137 2.137a2.253 2.253 0 010 3.182L21 15.683V18.7a2.252 2.252 0 01-2.25 2.25h-3.022l-2.136 2.137c-.425.425-.99.659-1.592.659zM5.25 4.45a.75.75 0 00-.75.75v3.337c0 .2-.078.389-.22.53l-2.357 2.357a.75.75 0 000 1.06l2.357 2.357c.14.14.22.333.22.53V18.7c0 .414.336.75.75.75h3.333c.2 0 .389.078.53.22l2.356 2.357c.141.142.33.219.531.219a.744.744 0 00.53-.219l2.357-2.357c.14-.14.333-.22.53-.22h3.333a.75.75 0 00.75-.75v-3.328c0-.198.08-.391.22-.53l2.357-2.357a.75.75 0 000-1.06L19.72 9.067a.744.744 0 01-.22-.53V5.2a.75.75 0 00-.75-.75h-3.333a.748.748 0 01-.53-.219l-2.356-2.353a.747.747 0 00-1.061-.001L9.113 4.231a.748.748 0 01-.53.219H5.25z"}}),_c('path',{attrs:{"d":"M12 17.954c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5a4.505 4.505 0 00-4.5 4.5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}})])
          )
        }
      }
    