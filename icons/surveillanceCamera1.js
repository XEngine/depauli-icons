
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
            children.concat([_c('path',{attrs:{"d":"M12 20a8.978 8.978 0 01-8.969-8.264A1.752 1.752 0 011.5 10V5.75H.75a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5h-.75V10c0 .891-.669 1.628-1.531 1.736A8.978 8.978 0 0112 20zm-7.462-8.25C4.915 15.566 8.12 18.5 12 18.5s7.085-2.934 7.462-6.75H4.538zM3 10c0 .138.112.25.25.25h17.5A.25.25 0 0021 10V5.75H3V10z"}}),_c('path',{attrs:{"d":"M14.25 8.75a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM12 15.875a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.982.717.717 0 010-.262c.06-.513.47-.922.983-.983a.796.796 0 01.26 0c.513.061.923.47.983.983a.808.808 0 010 .262 1.126 1.126 0 01-1.113.993z"}})])
          )
        }
      }
    