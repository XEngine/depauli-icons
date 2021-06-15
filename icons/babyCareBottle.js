
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
            children.concat([_c('path',{attrs:{"d":"M2.864 24.016a2.886 2.886 0 01-2.052-.869c-.542-.553-.837-1.283-.829-2.058s.316-1.499.869-2.042a3.56 3.56 0 00.999-3.005 5.027 5.027 0 01.471-3.061l.177-.353a2.473 2.473 0 01.168-3.298l.017-.016a2.437 2.437 0 011.729-.707c.402 0 .791.095 1.141.278l1.947-1.949a.416.416 0 01.077-.077L9.95 4.484l.017-.018.018-.017L13.769.66c.423-.426.987-.66 1.589-.66.598 0 1.16.232 1.583.653l6.406 6.406c.424.423.657.986.658 1.585 0 .596-.23 1.158-.651 1.581l-8.23 8.231c.178.346.272.73.272 1.125 0 .66-.256 1.28-.722 1.747a2.451 2.451 0 01-1.748.724 2.454 2.454 0 01-1.557-.551l-.352.176a5.011 5.011 0 01-3.075.469 3.58 3.58 0 00-2.997 1.006l-.034.033a2.884 2.884 0 01-2.03.831h-.017zm.747-10.255a3.538 3.538 0 00-.278 2.055 5.085 5.085 0 01-1.426 4.297 1.398 1.398 0 00.96 2.403c.383-.002.728-.14.993-.4l.024-.023a5.101 5.101 0 013.581-1.479c.235 0 .471.017.703.05.201.032.397.048.59.048.514 0 1.011-.109 1.479-.324l-6.626-6.627zm8.391 6.27a.782.782 0 01.07.071l.17.169a.96.96 0 00.684.282.965.965 0 00.97-.97.963.963 0 00-.285-.685l-8.51-8.51a.964.964 0 00-.685-.283.96.96 0 00-.684.282l-.025.024c-.355.364-.345.98.024 1.348l.177.177c.022.02.042.04.062.062l8.032 8.033zm2.146-2.721l8.134-8.135a.737.737 0 00.222-.531.735.735 0 00-.218-.525l-6.401-6.4a.74.74 0 00-1.054-.001l-3.273 3.277 1.9 1.9c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-1.9-1.9-1.37 1.371 1.899 1.898a.752.752 0 01-.531 1.281.748.748 0 01-.53-.219L8.068 8.49l-1.37 1.371 7.45 7.449z"}})])
          )
        }
      }
    