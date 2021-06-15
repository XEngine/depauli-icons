
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
            children.concat([_c('path',{attrs:{"d":"M.75 24.001a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v.75H6c1.8 0 3.324 1.268 3.675 3h3.075a3.754 3.754 0 013.75 3.75.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm14.121-3a2.264 2.264 0 00-2.121-1.5H6a.75.75 0 010-1.5h2.118A2.262 2.262 0 006 16.501H1.5v4.5h13.371zM16.5 16.501a.75.75 0 010-1.5c3.717 0 6-1.311 6-2.25V10.55c-1.379.907-3.585 1.451-6 1.451s-4.621-.544-6-1.451v2.201a.75.75 0 01-1.5 0v-9c0-2.138 3.224-3.75 7.5-3.75S24 1.613 24 3.751v9c0 2.138-3.224 3.75-7.5 3.75zm-6-8.25c0 .94 2.283 2.25 6 2.25s6-1.31 6-2.25V6.05c-1.379.907-3.585 1.451-6 1.451s-4.621-.544-6-1.451v2.201zm6-6.75c-3.717 0-6 1.31-6 2.25s2.283 2.25 6 2.25 6-1.31 6-2.25-2.283-2.25-6-2.25z"}})])
          )
        }
      }
    