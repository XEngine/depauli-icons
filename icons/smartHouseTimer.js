
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M18.75 12.75A.75.75 0 0118 12a5.982 5.982 0 00-1.263-3.676l-.457.456c-.141.142-.33.22-.53.22s-.389-.078-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l.457-.456a6.012 6.012 0 00-2.926-1.215v.701a.75.75 0 01-1.5 0v-.702A6.004 6.004 0 006 12a.75.75 0 01-1.5 0 7.497 7.497 0 016.75-7.463V3a.75.75 0 011.5 0v1.538a7.516 7.516 0 013.994 1.658l.726-.726c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-.726.726A7.48 7.48 0 0119.5 12a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M9.75 19.5a.75.75 0 01-.75-.75v-1.5H6.75A.75.75 0 016 16.5v-.75A3.754 3.754 0 019.75 12a.75.75 0 01.75.75v6a.75.75 0 01-.75.75zM9 15.75v-2.121a2.264 2.264 0 00-1.5 2.121H9zM12.75 19.5a.75.75 0 010-1.5h1.5a.75.75 0 000-1.5h-.75c-.827 0-1.5-.673-1.5-1.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 010 1.5H13.5V15h.75c1.241 0 2.25 1.009 2.25 2.25s-1.009 2.25-2.25 2.25h-1.5z"}})])
          )
        }
      }
    