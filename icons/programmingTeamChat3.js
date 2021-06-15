
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
            children.concat([_c('path',{attrs:{"d":"M3.375 20.251C1.514 20.251 0 18.737 0 16.876s1.514-3.375 3.375-3.375 3.375 1.514 3.375 3.375-1.514 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875zM20.625 20.251c-1.861 0-3.375-1.514-3.375-3.375s1.514-3.375 3.375-3.375S24 15.015 24 16.876s-1.514 3.375-3.375 3.375zm0-5.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875z"}}),_c('path',{attrs:{"d":"M16.715 24a.75.75 0 01-.583-.277 5.28 5.28 0 00-3.576-1.942 5.25 5.25 0 00-3.901 1.155 5.323 5.323 0 00-.787.787.751.751 0 01-1.242-.83 3.784 3.784 0 00-3.259-1.889 3.744 3.744 0 00-2.18.705.75.75 0 01-.876-1.217 5.18 5.18 0 011-.564 5.195 5.195 0 012.057-.423c1.739 0 3.359.861 4.332 2.275l.011-.009a6.728 6.728 0 014.276-1.52c.241 0 .485.013.727.038a6.744 6.744 0 013.587 1.489 5.266 5.266 0 014.331-2.273c.709 0 1.401.142 2.057.423.353.151.689.341 1 .564a.75.75 0 01-.438 1.359.75.75 0 01-.438-.141 3.799 3.799 0 00-.714-.403c-.467-.2-.96-.302-1.465-.302a3.784 3.784 0 00-3.259 1.888.752.752 0 01-.187.941.763.763 0 01-.473.166z"}}),_c('path',{attrs:{"d":"M12 20.251c-2.275 0-4.125-1.851-4.125-4.125s1.85-4.125 4.125-4.125c2.274 0 4.125 1.851 4.125 4.125S14.274 20.251 12 20.251zm0-6.75c-1.447 0-2.625 1.177-2.625 2.625s1.178 2.625 2.625 2.625c1.448 0 2.625-1.177 2.625-2.625S13.448 13.501 12 13.501z"}}),_c('path',{attrs:{"d":"M8.25 12.75a.751.751 0 01-.386-.107L4.292 10.5H1.5a.75.75 0 01-.75-.75v-9A.75.75 0 011.5 0h14.25a.75.75 0 01.75.75v9a.75.75 0 01-.75.75H9V12a.753.753 0 01-.75.75zM4.5 9c.136 0 .27.037.386.107L7.5 10.675V9.75A.75.75 0 018.25 9H15V1.5H2.25V9H4.5z"}}),_c('path',{attrs:{"d":"M6 7.5a.743.743 0 01-.53-.22l-1.5-1.5c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.5-1.5C5.611 3.078 5.8 3 6 3s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-.97.97.97.97c.142.141.22.33.22.53s-.078.389-.22.53A.743.743 0 016 7.5zM11.25 7.5a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l.97-.97-.97-.97c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.5 1.5c.142.141.22.33.22.53s-.078.389-.22.53l-1.5 1.5a.743.743 0 01-.53.22zM8.25 7.5a.752.752 0 01-.728-.932l.75-3a.748.748 0 011.371-.204.744.744 0 01.084.568l-.75 3a.748.748 0 01-.727.568z"}})])
          )
        }
      }
    