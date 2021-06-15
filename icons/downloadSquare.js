
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24A3.754 3.754 0 010 20.25V3.75A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3.75zm0-22.5A2.252 2.252 0 001.5 3.75v16.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V3.75a2.252 2.252 0 00-2.25-2.25H3.75z"}}),_c('path',{attrs:{"d":"M15 15.75a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75h1.939L12 4.811 7.061 9.75H9a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0v-3.75h-3a.747.747 0 01-.693-.463.745.745 0 01.163-.817l6.75-6.75c.141-.142.33-.22.53-.22s.389.078.53.22l6.75 6.75a.75.75 0 01-.53 1.281h-3V15a.75.75 0 01-.75.75zM15 20.25a.75.75 0 01-.75-.75V18a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM9 20.25a.75.75 0 01-.75-.75V18a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    