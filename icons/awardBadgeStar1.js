
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
            children.concat([_c('path',{attrs:{"d":"M8.127 23.996a1.545 1.545 0 01-1.345-.789 1.548 1.548 0 01-.071-1.358l1.323-2.806-2.179-1.31a.703.703 0 01-.14-.109 1.532 1.532 0 011.074-2.622h2.372l1.458-2.905c.021-.04.042-.079.066-.116l-3.742-2.67a2.252 2.252 0 01-.942-1.833V2.251a2.252 2.252 0 012.25-2.25h7.5a2.252 2.252 0 012.25 2.25V7.48c0 .725-.352 1.409-.942 1.831l-3.75 2.677c.021.034.041.069.06.105l1.46 2.91h2.387a1.527 1.527 0 011.069 2.613.8.8 0 01-.1.083l-1.95 1.338 1.061 2.844c.153.354.156.767.001 1.148a1.538 1.538 0 01-1.428.965c-.264 0-.524-.067-.752-.195l-3.116-1.753L8.877 23.8c-.23.129-.49.196-.75.196zm3.874-3.561a.75.75 0 01.367.096l3.482 1.959.181.345-.148-.344a.04.04 0 00.021-.052l-1.28-3.427a.75.75 0 01.278-.881l2.335-1.602c0-.02-.009-.027-.021-.027h-2.851a.746.746 0 01-.67-.413l-1.665-3.318a.043.043 0 00-.017-.015l-.033-.002a.043.043 0 00-.025.021l-1.662 3.314a.747.747 0 01-.67.414H6.789a.034.034 0 00-.022.009.031.031 0 00-.008.015l2.629 1.58a.747.747 0 01.292.962l-1.601 3.395.004-.005c.003 0 .004.008.008.015.006.01.013.016.023.019l.213.324-.184-.327 3.49-1.96a.767.767 0 01.368-.095zm.75-9.891l3.436-2.453a.752.752 0 00.314-.61v-5.23a.75.75 0 00-.75-.75h-3v9.043zm-4.5-9.043a.75.75 0 00-.75.75v5.228c0 .243.117.471.314.612l3.436 2.453V1.501h-3z"}})])
          )
        }
      }
    