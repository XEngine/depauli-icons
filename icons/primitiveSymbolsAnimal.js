
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
            children.concat([_c('path',{attrs:{"d":"M9.985 23.263a3.478 3.478 0 01-2.701-1.275 3.476 3.476 0 01-.784-2.522v-2.094l-.536-1.612-1.713 1.142v3.349c0 1.035.439 1.5.75 1.5a.75.75 0 010 1.5c-1.084 0-2.25-.939-2.25-3V16.5c0-.251.125-.485.334-.624l2.387-1.591-.123-.369a2.811 2.811 0 01-1.099.223 2.817 2.817 0 01-2.042-.871.749.749 0 011.084-1.037l.043.043c.245.234.57.365.915.365.366 0 .707-.145.96-.408l.05-.048 5.953-5.208L13.9 3.75h-2.871a3.976 3.976 0 01-3.661-1.849.75.75 0 111.267-.803 2.48 2.48 0 002.306 1.154c.021-.002.04-.002.059-.002V1.5a.75.75 0 011.5 0v.75h9c.262 0 .5.133.638.356.137.223.15.496.033.73-.285.57-1.801 3.415-3.671 3.415h-5.149l-.349.419 5.011 1.879c.012.004.023.01.035.015a.75.75 0 01.409.439c.006.016.011.035.016.054a.31.31 0 01.014.052c.828 4.139-.12 5.086-.956 5.923a.744.744 0 01-1.06 0 .752.752 0 010-1.061c.592-.592 1.107-1.107.701-3.701l-4.977 1.866-4.194 4.893V19.5a.82.82 0 01-.003.07 1.986 1.986 0 00.445 1.465 1.986 1.986 0 001.734.719.746.746 0 01.82.673.744.744 0 01-.167.549.747.747 0 01-.506.271c-.113.01-.226.016-.339.016zm-2.441-7.507l3.638-4.244a.747.747 0 01.306-.214l4.127-1.548-3.708-1.39-5.287 4.626.924 2.77zM18.501 5.25c.403 0 1.056-.594 1.682-1.5h-4.331l-1.25 1.5h3.899z"}})])
          )
        }
      }
    