
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-2.999-3a.744.744 0 010-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l1.72 1.72v-4.19A2.252 2.252 0 009 15H3c-1.654 0-3-1.346-3-3s1.346-3 3-3h18c.827 0 1.5-.673 1.5-1.5S21.827 6 21 6h-6.75a3.754 3.754 0 01-3.75-3.75V.75a.75.75 0 011.5 0v1.5a2.252 2.252 0 002.25 2.25H21c1.654 0 3 1.346 3 3s-1.346 3-3 3H3c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h6a3.754 3.754 0 013.75 3.75v4.189l1.72-1.72a.744.744 0 011.06 0 .749.749 0 010 1.06l-3 3a.763.763 0 01-.246.164l-.027.01A.725.725 0 0112 24z"}})])
          )
        }
      }
    