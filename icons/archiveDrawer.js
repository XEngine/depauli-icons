
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
            children.concat([_c('path',{attrs:{"d":"M2.25 22.5A2.252 2.252 0 010 20.25V16.5c0-.827.673-1.5 1.5-1.5H9a.75.75 0 01.75.75A2.252 2.252 0 0012 18a2.252 2.252 0 002.25-2.25A.75.75 0 0115 15h7.5c.827 0 1.5.673 1.5 1.5v3.75a2.252 2.252 0 01-2.25 2.25H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V16.5h-6.825c-.35 1.732-1.875 3-3.675 3s-3.324-1.268-3.675-3H1.5v3.75zM21.75 13.5a.75.75 0 01-.75-.75v-9a.75.75 0 00-.75-.75H10.5a.75.75 0 00-.75.75v9a.75.75 0 01-1.5 0v-9A2.252 2.252 0 0110.5 1.5h9.75a2.252 2.252 0 012.25 2.25v9a.75.75 0 01-.75.75zM2.25 13.5a.75.75 0 01-.75-.75v-6A2.252 2.252 0 013.75 4.5H6A.75.75 0 016 6H3.75a.75.75 0 00-.75.75v6a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M14.999 7.5a.75.75 0 010-1.5h3.751a.75.75 0 010 1.5h-3.751zM11.999 11.25a.75.75 0 010-1.5h6.751a.75.75 0 010 1.5h-6.751z"}})])
          )
        }
      }
    