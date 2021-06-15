
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
            children.concat([_c('path',{attrs:{"d":"M15 23.997a.81.81 0 01-.146-.014l-7.068-1.389a2.983 2.983 0 01-2.536 1.404c-1.654 0-3-1.346-3-3 0-1.067.582-2.061 1.5-2.594V2.247A2.252 2.252 0 016-.003h10.5a5.256 5.256 0 015.25 5.25.75.75 0 01-.75.75h-.915l-4.358 17.432a.747.747 0 01-.727.568zm-9.75-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm9.195 2.877L18.54 5.997H5.25v12a3.004 3.004 0 012.995 3.158l6.2 1.219zm5.729-17.877c-.352-1.712-1.892-3-3.674-3H6a.75.75 0 00-.75.75v2.25h14.924z"}})])
          )
        }
      }
    