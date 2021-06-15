
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
            children.concat([_c('path',{attrs:{"d":"M4.503 24.021c-.603-.002-1.168-.238-1.591-.664s-.656-.992-.654-1.593c.001-.268.049-.531.143-.782l1.125-3a2.22 2.22 0 01.643-.912 2.251 2.251 0 01-.416-1.299v-6a2.252 2.252 0 012.25-2.25h2.25a.75.75 0 010 1.5h-2.25a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-2.25a.75.75 0 010-1.5h2.25a2.252 2.252 0 012.25 2.25v6c0 .453-.133.885-.382 1.253.313.251.554.581.695.958l.966 3.027a2.22 2.22 0 01-.069 1.694 2.236 2.236 0 01-1.259 1.175 2.235 2.235 0 01-.789.143H4.503zm1.125-6a.753.753 0 00-.698.487l-1.125 3a.743.743 0 00.171.791.742.742 0 00.53.221h14.911a.745.745 0 00.683-.439.745.745 0 00.02-.573l-.969-3.035c-.097-.258-.383-.451-.688-.452H5.628z"}}),_c('path',{attrs:{"d":"M10.503 21.021a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM12.003 9.021c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125 1.125.505 1.125 1.125-.505 1.125-1.125 1.125zM6.003 3.644a.752.752 0 01-.472-1.333A10.319 10.319 0 0112.003.036c2.359 0 4.657.808 6.472 2.275a.747.747 0 01-.472 1.333.749.749 0 01-.471-.167c-1.549-1.253-3.512-1.943-5.528-1.943s-3.979.69-5.528 1.943a.76.76 0 01-.473.167z"}}),_c('path',{attrs:{"d":"M15.502 6.021a.749.749 0 01-.471-.167c-.848-.686-1.924-1.064-3.028-1.064s-2.18.378-3.028 1.064a.749.749 0 01-1.054-.111.752.752 0 01.111-1.055 6.33 6.33 0 013.972-1.396 6.33 6.33 0 013.971 1.396.747.747 0 01-.473 1.333z"}})])
          )
        }
      }
    