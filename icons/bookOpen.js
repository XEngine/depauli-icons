
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
            children.concat([_c('path',{attrs:{"d":"M12 23.999a.516.516 0 01-.079-.006 2.366 2.366 0 01-1.38-.495 16.257 16.257 0 00-8.493-3.739A2.356 2.356 0 010 17.428V2.365A2.344 2.344 0 01.938.48a2.338 2.338 0 011.75-.456 17.83 17.83 0 018.796 4.003.84.84 0 00.478.163c.013-.002.024-.002.038-.002l.039.002a.89.89 0 00.503-.183A17.769 17.769 0 0121.298.024a2.352 2.352 0 012.01.671c.446.447.691 1.041.689 1.672V17.43a2.358 2.358 0 01-2.043 2.331 16.194 16.194 0 00-8.469 3.719l-.036.028c-.386.3-.863.47-1.37.487-.029.002-.054.004-.079.004zm.75-1.86a17.672 17.672 0 019.012-3.867.85.85 0 00.735-.843V2.365a.862.862 0 00-.856-.865c-.041.001-.084.002-.125.008a16.301 16.301 0 00-8.031 3.665 2.398 2.398 0 01-.735.392v16.574zM2.359 1.501a.863.863 0 00-.859.864v15.064c0 .425.318.788.739.844a17.686 17.686 0 019.011 3.866V5.567a2.314 2.314 0 01-.708-.374A16.382 16.382 0 002.47 1.508a.768.768 0 00-.111-.007z"}})])
          )
        }
      }
    