
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
            children.concat([_c('path',{attrs:{"d":"M12 15a7.49 7.49 0 01-6.671-4.078 7.41 7.41 0 01-.781-4.262l.005-.043A7.486 7.486 0 018.594.821 7.417 7.417 0 0112 0c1.147 0 2.249.254 3.277.755.046.018.089.04.129.065a7.486 7.486 0 014.042 5.805l.004.028a7.412 7.412 0 01-.824 4.352A7.492 7.492 0 0112 15zm-4.292-3.315C8.83 12.834 10.379 13.5 12 13.5s3.17-.666 4.292-1.815a5.917 5.917 0 01-.229.005c-.943 0-1.782-.226-2.496-.673-.648-.406-1.173-.988-1.566-1.738-.394.75-.918 1.333-1.567 1.738-.714.447-1.554.673-2.497.673-.075 0-.152-.002-.229-.005zM12.917 7.5c.279 1.065.764 1.819 1.445 2.245.472.295 1.045.445 1.702.445.528 0 1.027-.098 1.392-.196A5.927 5.927 0 0018 7.5h-5.083zM6.545 9.995a5.48 5.48 0 001.391.196c.657 0 1.23-.15 1.702-.445.681-.426 1.166-1.18 1.445-2.245H6c0 .869.183 1.708.545 2.494zM17.808 6a6.018 6.018 0 00-2.058-3.178v.928a.75.75 0 01-1.5 0V1.94a5.914 5.914 0 00-1.5-.392V3.75a.75.75 0 01-1.5 0V1.548a5.914 5.914 0 00-1.5.392v1.81a.75.75 0 01-1.5 0v-.928A6.026 6.026 0 006.192 6h11.616zM21.75 24a.75.75 0 01-.685-.445 9.903 9.903 0 00-5.038-5.038 9.813 9.813 0 00-4.012-.854 9.939 9.939 0 00-9.08 5.892.75.75 0 01-1.37-.609 11.441 11.441 0 0110.452-6.782c1.597 0 3.151.331 4.62.983a11.402 11.402 0 015.799 5.799A.752.752 0 0121.75 24z"}})])
          )
        }
      }
    