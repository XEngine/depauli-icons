
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
            children.concat([_c('path',{attrs:{"d":"M11.881 23.998c-1.298 0-4.5-2.69-4.5-6.75a6.818 6.818 0 011.363-4.277 4.486 4.486 0 01-1.353-2.923L1.739 15.7a3.527 3.527 0 001.954.8l.106.002c.581 0 1.15-.207 1.604-.583a.753.753 0 011.056.1.75.75 0 01-.1 1.056 4.044 4.044 0 01-2.765.921 5.005 5.005 0 01-2.776-1.112 1.503 1.503 0 01-.141-2.244l7.674-7.675c.121-.152.249-.296.384-.429a3.701 3.701 0 01-.604-2 3.697 3.697 0 01.621-2.107l-.14-.14a2.235 2.235 0 00-2.039-.615 4.841 4.841 0 00-2.448 1.138.749.749 0 11-.988-1.128A6.286 6.286 0 016.307.199c.225-.046.473-.071.72-.071.982 0 1.947.401 2.646 1.101l.141.141a3.697 3.697 0 012.029-.622h.055a3.73 3.73 0 012.05.621l.141-.141A3.719 3.719 0 0116.737.129c.252 0 .505.026.753.076a6.24 6.24 0 013.136 1.479.75.75 0 01-.989 1.128 4.78 4.78 0 00-2.414-1.131 2.43 2.43 0 00-.482-.05c-.602 0-1.167.234-1.591.658l-.142.142c.401.602.616 1.297.623 2.03.008.749-.2 1.46-.602 2.077.134.133.262.276.382.428l7.672 7.672c.283.283.44.66.44 1.061a1.495 1.495 0 01-.606 1.206 4.927 4.927 0 01-2.724 1.089 4.048 4.048 0 01-2.79-.919.752.752 0 01.478-1.328c.174 0 .344.061.478.172a2.537 2.537 0 001.736.579 3.456 3.456 0 001.9-.776l.03-.024-5.654-5.651a4.48 4.48 0 01-1.352 2.923 6.751 6.751 0 011.361 4.303c0 1.733-.621 3.46-1.748 4.851-.894 1.103-2.025 1.874-2.751 1.874zm-2.221-3.75c.817 1.476 1.976 2.189 2.22 2.248.245-.059 1.405-.772 2.222-2.248H9.66zm5.038-1.5c.122-.487.183-.99.183-1.5h-6c.002.516.064 1.017.186 1.5h5.631zm.022-3a5.29 5.29 0 00-.935-1.925 4.488 4.488 0 01-3.807 0 5.277 5.277 0 00-.936 1.925h5.678zm-2.839-9c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm-.021-4.5a2.237 2.237 0 00-1.586.675 2.235 2.235 0 00-.643 1.598c.004.417.119.812.334 1.158a4.47 4.47 0 013.83 0c.224-.36.339-.77.334-1.203a2.236 2.236 0 00-.675-1.584 2.223 2.223 0 00-1.564-.643l-.03-.001z"}})])
          )
        }
      }
    