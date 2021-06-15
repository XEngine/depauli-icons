
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
            children.concat([_c('path',{attrs:{"d":"M12 24.005a11.922 11.922 0 01-8.481-3.511A11.917 11.917 0 010 12.01v-.023a11.927 11.927 0 013.511-8.464A11.925 11.925 0 0111.908.006a.586.586 0 01.186.001 11.947 11.947 0 017.84 2.999l.536-.536c.141-.142.33-.22.53-.22s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53l-7.72 7.72h9.439A.754.754 0 0124 12c.003 6.616-5.378 12.002-11.995 12.005H12zM1.529 12.75a10.454 10.454 0 003.05 6.683 10.45 10.45 0 006.671 3.043v-3.013a7.521 7.521 0 01-1.529-.316 7.455 7.455 0 01-4.386-3.708 7.548 7.548 0 01-.793-2.689H1.529zm11.221 9.725c5.186-.369 9.354-4.539 9.721-9.725h-3.008a7.55 7.55 0 01-.148.915.746.746 0 01-.897.566.744.744 0 01-.468-.331.742.742 0 01-.097-.566c.043-.192.077-.388.102-.585H12.75v5.207a5.945 5.945 0 002.006-.624.75.75 0 011.011.323.744.744 0 01.048.572.742.742 0 01-.371.438 7.448 7.448 0 01-2.694.801v3.009zM6.049 12.75a5.95 5.95 0 00.618 2.001 5.961 5.961 0 003.51 2.966c.351.112.71.192 1.073.238V12.75H6.049zm5.201-1.5V6.048a5.938 5.938 0 00-1.917.577.767.767 0 01-.333.077.751.751 0 01-.333-1.422 7.452 7.452 0 012.583-.741V1.534a10.451 10.451 0 00-6.678 3.05 10.455 10.455 0 00-3.043 6.666H4.54a7.455 7.455 0 01.387-1.75.752.752 0 01.957-.457.75.75 0 01.457.957 5.86 5.86 0 00-.292 1.25h5.201zm1.5-1.06l2.926-2.926a6.045 6.045 0 00-2.926-1.213v4.139zm0-5.648a7.524 7.524 0 013.993 1.655l2.128-2.128a10.472 10.472 0 00-6.121-2.534v3.007z"}}),_c('path',{attrs:{"d":"M17.625 17.25a.796.796 0 01-.13-.011 1.126 1.126 0 01-.983-.983.796.796 0 010-.261c.06-.513.47-.923.983-.983a.699.699 0 01.261-.001c.513.06.923.47.983.983a.808.808 0 010 .262c-.06.513-.47.923-.983.983a.817.817 0 01-.131.011zM6.375 8.25a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.982.982a.717.717 0 010 .262c-.06.513-.47.922-.982.982a.717.717 0 01-.131.012z"}})])
          )
        }
      }
    