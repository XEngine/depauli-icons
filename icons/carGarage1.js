
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24A2.253 2.253 0 0115 21.75V21H9v.75A2.252 2.252 0 016.75 24h-1.5A2.253 2.253 0 013 21.75V21c-.827 0-1.5-.673-1.5-1.5v-3.75c0-1.03.715-1.929 1.698-2.179l1.051-2.908A2.25 2.25 0 016.421 9h11.158a2.25 2.25 0 012.172 1.663l1.051 2.908A2.264 2.264 0 0122.5 15.75v3.75c0 .827-.673 1.5-1.5 1.5v.75A2.252 2.252 0 0118.75 24h-1.5zm-.75-2.25c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V21h-3v.75zm-12 0c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V21h-3v.75zM21 19.5V18h-2.25a.75.75 0 010-1.5H21v-.75a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v.75h2.25a.75.75 0 010 1.5H3v1.5h6v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25h6zm-7.5 0V18h-3v1.5h3zm5.681-6l-.853-2.359a.675.675 0 01-.021-.071.749.749 0 00-.728-.569H6.422a.75.75 0 00-.728.568.659.659 0 01-.022.072L4.819 13.5h14.362z"}}),_c('path',{attrs:{"d":"M.75 9a.749.749 0 01-.624-.334c-.111-.167-.15-.367-.111-.563a.747.747 0 01.319-.477l11.25-7.5a.753.753 0 01.832 0l11.25 7.5a.746.746 0 01.208 1.04.749.749 0 01-1.04.208L12 1.651 1.166 8.874A.743.743 0 01.75 9z"}})])
          )
        }
      }
    