
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
            children.concat([_c('path',{attrs:{"d":"M2.483 6.75a.75.75 0 01-.634-1.15 12.054 12.054 0 014.55-4.215.753.753 0 011.013.312.752.752 0 01-.312 1.014A10.554 10.554 0 003.117 6.4a.746.746 0 01-.634.35zM2.048 18.001a.748.748 0 01-.663-.399A11.997 11.997 0 010 11.999a.751.751 0 011.281-.529c.141.142.219.33.219.531A10.482 10.482 0 002.711 16.9a.747.747 0 01-.663 1.101zM11.979 24c-2.265 0-4.473-.641-6.387-1.852a.751.751 0 01.803-1.268 10.418 10.418 0 005.584 1.62l.045.001c.389 0 .725.335.726.748a.746.746 0 01-.748.751h-.023zM17.25 22.703a.75.75 0 01-.351-1.412 10.572 10.572 0 003.985-3.691.745.745 0 011.034-.233.747.747 0 01.233 1.035 12.07 12.07 0 01-4.551 4.214.74.74 0 01-.35.087zM23.25 12.75a.75.75 0 01-.75-.751c.003-1.7-.416-3.394-1.21-4.898a.75.75 0 011.326-.7 11.993 11.993 0 011.384 5.6.75.75 0 01-.75.749zM17.257 2.8a.754.754 0 01-.351-.087A10.493 10.493 0 0012.019 1.5H12a.75.75 0 01-.001-1.5c1.961 0 3.894.48 5.609 1.387a.75.75 0 01-.351 1.413zM9.107 16.5c-.173 0-.345-.028-.511-.084a1.59 1.59 0 01-.927-.806 1.6 1.6 0 01-.169-.716V9.106a1.607 1.607 0 012.322-1.437l5.79 2.896c.383.191.669.521.804.928.136.407.105.842-.086 1.225-.154.309-.41.565-.719.719l-5.788 2.895a1.606 1.606 0 01-.716.168zM9.106 9A.106.106 0 009 9.106v5.788a.108.108 0 00.072.101.112.112 0 00.081-.006l5.788-2.895a.105.105 0 000-.188l-5.79-2.895A.094.094 0 009.106 9z"}})])
          )
        }
      }
    