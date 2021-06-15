
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24.004a.75.75 0 01-.75-.75v-15a2.252 2.252 0 00-2.25-2.25.75.75 0 010-1.5 3.754 3.754 0 013.75 3.75v2.25h3.402a2.977 2.977 0 01-.402-1.5h-.75a.75.75 0 010-1.5h.792A6.747 6.747 0 0113.5 1.546V.754a.75.75 0 011.5 0v.792a6.747 6.747 0 015.958 5.958h.792a.75.75 0 010 1.5H21c0 .535-.139 1.049-.4 1.5h1.15a2.252 2.252 0 012.25 2.25v10.5a.75.75 0 01-.75.75H3.75zm18.75-1.5v-9.75a.75.75 0 00-.75-.75H4.5v10.5H9v-6.75a.75.75 0 011.5 0v6.75h3v-6.75a.75.75 0 011.5 0v6.75h3v-6.75a.75.75 0 011.5 0v6.75h3zM9 9.004c.002.827.674 1.5 1.5 1.5H18c.402-.001.78-.157 1.062-.441.283-.284.438-.659.438-1.059H9zM19.446 7.5a5.265 5.265 0 00-5.196-4.496A5.265 5.265 0 009.054 7.5h10.392z"}})])
          )
        }
      }
    