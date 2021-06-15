
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
            children.concat([_c('path',{attrs:{"d":"M15.18 20.074a1.547 1.547 0 01-1.37-.822l-1.07-2.332a.745.745 0 01-.021-.573.745.745 0 01.703-.489c.293 0 .56.172.682.438l1.038 2.265a.057.057 0 00.022.011l.214.327-.176-.331a.052.052 0 00.024-.029l1.806-4.982a.75.75 0 01.449-.449l4.944-1.794c.058-.018.065-.031.068-.037a.048.048 0 00.004-.039.05.05 0 00-.024-.029L9.129 5.102a.75.75 0 01.624-1.364l13.383 6.127c.4.211.676.541.796.94.12.396.078.815-.117 1.18a1.542 1.542 0 01-.917.752l-4.576 1.662-1.673 4.613a1.553 1.553 0 01-1.469 1.062z"}}),_c('path',{attrs:{"d":"M7.679 20.356a1.551 1.551 0 01-1.37-.823L.151 6.087A1.584 1.584 0 01.15 4.872c.162-.393.467-.7.859-.863a1.578 1.578 0 011.218-.002l13.409 6.139c.4.211.676.541.796.94.12.395.078.814-.118 1.18a1.542 1.542 0 01-.917.752l-4.576 1.662-1.673 4.613a1.543 1.543 0 01-1.469 1.063zm-.037-1.511l.021.009.038-.004a.051.051 0 00.024-.03l1.806-4.981a.745.745 0 01.449-.449l4.944-1.794c.059-.019.081-.046.072-.075a.055.055 0 00-.024-.03L1.629 5.382l-.004.004a.104.104 0 00-.038.008.093.093 0 00-.051.05.089.089 0 000 .068l6.106 13.333z"}})])
          )
        }
      }
    