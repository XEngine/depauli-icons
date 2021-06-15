
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
            children.concat([_c('path',{attrs:{"d":"M20.25 20.75A2.252 2.252 0 0118 18.5v-.75H6v.75c0 1.241-1.009 2.25-2.25 2.25S1.5 19.741 1.5 18.5v-.879A2.258 2.258 0 010 15.5v-2.251a2.543 2.543 0 01.249-1.097 2.53 2.53 0 01.5-.713l1.94-1.94-.75-.75H.75a.749.749 0 110-1.499h1.5c.2 0 .389.078.53.22l.676.676 1.291-3.449A3.014 3.014 0 017.556 2.75h8.885c1.243 0 2.372.782 2.808 1.947l1.292 3.451.679-.678c.14-.14.333-.22.53-.22h1.5a.75.75 0 010 1.5h-1.189l-.75.75 1.94 1.94A2.56 2.56 0 0124 13.249V15.5c0 .96-.615 1.808-1.5 2.121v.879a2.252 2.252 0 01-2.25 2.25zm-.75-2.25a.75.75 0 001.5 0v-.75h-1.5v.75zM3 18.5a.75.75 0 001.5 0v-.75H3v.75zm-1.5-3c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-2.25h-3.129c-.2 0-.388.078-.53.219L17.78 14.53a.744.744 0 01-1.06 0 .749.749 0 010-1.06l1.061-1.061c.425-.425.99-.659 1.59-.659h2.068l-1.5-1.5H4.061l-1.5 1.5h2.068c.601 0 1.166.234 1.59.659L7.28 13.47c.142.141.22.33.22.53s-.078.389-.22.53a.744.744 0 01-1.06 0l-1.061-1.061a.754.754 0 00-.53-.219H1.5v2.25zm17.666-6.75l-1.321-3.527a1.506 1.506 0 00-1.404-.973H7.557c-.622 0-1.186.391-1.404.973L4.832 8.75h14.334z"}})])
          )
        }
      }
    