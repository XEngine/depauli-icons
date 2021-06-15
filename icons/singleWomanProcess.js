
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
            children.concat([_c('path',{attrs:{"d":"M20.25 18a3.754 3.754 0 01-3.75-3.75c0-2.068 1.682-3.75 3.75-3.75S24 12.182 24 14.25A3.754 3.754 0 0120.25 18zm0-6C19.009 12 18 13.009 18 14.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S21.491 12 20.25 12zM15.75 6a.743.743 0 01-.53-.22L13.5 4.06l-1.72 1.72c-.141.142-.33.22-.53.22s-.389-.078-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L12.439 3l-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.747.747 0 011.061 0l1.72 1.72L15.22.22c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53L14.561 3l1.72 1.72c.142.141.22.33.22.53s-.078.389-.22.53-.331.22-.531.22z"}}),_c('path',{attrs:{"d":"M12.75 12.75a.752.752 0 01-.511-1.3L21.34 3h-2.59a.75.75 0 010-1.5h4.5a.396.396 0 01.064.005c.073.004.16.025.24.06l.026.013a.754.754 0 01.227.169l.023.028c.048.056.092.13.122.209l.012.036a.773.773 0 01.036.23v4.5a.75.75 0 01-1.5 0V3.97l-9.24 8.58a.749.749 0 01-.51.2zM3 24a.747.747 0 01-.746-.675L1.571 16.5H.75a.75.75 0 01-.75-.75v-3a5.21 5.21 0 012.003-4.124.754.754 0 01.463-.16c.231 0 .446.104.589.286l2.195 2.786 2.195-2.786a.747.747 0 011.053-.126 5.21 5.21 0 012.003 4.124v3a.75.75 0 01-.75.75h-.822l-.682 6.825A.748.748 0 017.5 24H3zm3.821-1.5l.682-6.825A.748.748 0 018.25 15H9v-2.25a3.691 3.691 0 00-.886-2.423l-2.275 2.888c-.139.176-.354.277-.589.277s-.45-.101-.589-.278l-2.275-2.888A3.696 3.696 0 001.5 12.75V15h.75c.387 0 .708.29.746.675l.683 6.825h3.142zM5.25 7.5a3.717 3.717 0 01-2.765-1.222C2.004 7.27 1.299 7.5.75 7.5a.75.75 0 010-1.5c.456 0 .749-1.333.75-2.251A3.754 3.754 0 015.25 0C7.318 0 9 1.682 9 3.75S7.318 7.5 5.25 7.5zm0-6C4.009 1.5 3 2.509 3 3.75S4.009 6 5.25 6 7.5 4.991 7.5 3.75 6.491 1.5 5.25 1.5z"}})])
          )
        }
      }
    