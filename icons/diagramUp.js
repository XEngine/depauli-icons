
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
            children.concat([_c('path',{attrs:{"d":"M.75 24.001a.752.752 0 01-.565-1.243.742.742 0 01.514-.255c10.486-.72 18.692-9.451 18.792-19.933L17.78 4.282a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L19.661.281a.745.745 0 01.542-.278l.075.002a.742.742 0 01.506.22l2.997 2.997c.141.141.219.329.219.529s-.078.389-.22.53a.749.749 0 01-1.06 0l-1.728-1.728c-.09 11.275-8.913 20.672-20.19 21.446-.014.002-.033.002-.052.002z"}})])
          )
        }
      }
    