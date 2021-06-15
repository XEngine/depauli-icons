
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
            children.concat([_c('path',{attrs:{"d":"M6.749 9.009c-1.241 0-2.25-1.009-2.25-2.25a2.252 2.252 0 013-2.121V2.259a.75.75 0 011.166-.624l2.25 1.5a.747.747 0 01-.417 1.374.753.753 0 01-.416-.126L8.999 3.66v3.099c0 1.24-1.01 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM.748 21.009a.752.752 0 01-.671-1.085l.957-1.915H.749a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-5.25v1.5h3.75a.75.75 0 010 1.5H2.712L1.42 20.594a.749.749 0 01-.672.415z"}}),_c('path',{attrs:{"d":"M8.249 13.509a.75.75 0 01-.75-.75v-.75h-5.25a2.252 2.252 0 01-2.25-2.25v-7.5a2.252 2.252 0 012.25-2.25h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75h-2.25a.75.75 0 010-1.5h2.25a2.252 2.252 0 012.25 2.25v7.5a2.252 2.252 0 01-2.25 2.25h-5.25v.75c0 .413-.337.75-.75.75zM13.499 21.009a.743.743 0 01-.53-.22l-1.5-1.5a.744.744 0 010-1.06.746.746 0 011.06-.001l1.5 1.5a.752.752 0 01-.53 1.281z"}}),_c('path',{attrs:{"d":"M13.339 24.013c-1.333 0-2.683-.585-3.704-1.606-1.61-1.61-2.071-3.952-1.122-5.696.64-1.175 1.837-1.848 3.285-1.848.128 0 .259.005.39.016a3.265 3.265 0 014.339-1.894l4.58-4.584c.234-.234.546-.363.877-.363s.642.129.876.362l.775.774c.483.484.483 1.27.001 1.753l-4.58 4.584c.125.294.206.604.24.923a3.277 3.277 0 01-2.134 3.418c.124 1.61-.549 2.966-1.838 3.668a4.144 4.144 0 01-1.985.493zm-1.551-7.652c-.901 0-1.578.369-1.958 1.067-.706 1.298-.1 2.954.865 3.918.718.718 1.741 1.164 2.669 1.164.451 0 .87-.103 1.243-.306.909-.495 1.258-1.476.981-2.763a.752.752 0 01.652-.903 1.758 1.758 0 001.185-.647 1.756 1.756 0 00.087-2.095.752.752 0 01.09-.951l4.789-4.794-.407-.407-4.788 4.794a.745.745 0 01-.951.091 1.767 1.767 0 00-2.743 1.27.755.755 0 01-.745.669.764.764 0 01-.158-.017 3.971 3.971 0 00-.811-.09z"}})])
          )
        }
      }
    