
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
            children.concat([_c('path',{attrs:{"d":"M23.249 24a.75.75 0 01-.75-.75v-1.5h-9.75v1.5a.75.75 0 01-1.5 0v-1.5h-9.75v1.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0v1.5h9.75v-1.5a.75.75 0 011.5 0v1.5h9.75v-1.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zm-.75-3.75v-1.5h-9.75v1.5h9.75zm-11.25 0v-1.5h-9.75v1.5h9.75zM1.499 13.5a.751.751 0 01-.416-1.374l6.75-4.5a.748.748 0 01.832 0l3.334 2.223 5.584-3.723a.748.748 0 01.832 0l5.252 3.501a.746.746 0 01.208 1.04.75.75 0 01-1.041.208l-4.836-3.224-4.648 3.099 2.064 1.376a.75.75 0 01-.832 1.248L8.249 9.151l-6.334 4.223a.745.745 0 01-.416.126zM13.499 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    