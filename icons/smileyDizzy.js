
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
            children.concat([_c('path',{attrs:{"d":"M14.246 19.524a2.252 2.252 0 01-2.25-2.25v-.75h-5.25a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5h-.75v.75a2.252 2.252 0 01-2.25 2.25zm-.75-2.25a.75.75 0 001.5 0v-.75h-1.5v.75zM5.621 10.524c-1.447 0-2.625-1.178-2.625-2.625s1.178-2.625 2.625-2.625 2.625 1.178 2.625 2.625-1.178 2.625-2.625 2.625zm0-3.75c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125 1.125-.505 1.125-1.125-.505-1.125-1.125-1.125zM18.371 10.524c-1.448 0-2.625-1.178-2.625-2.625s1.177-2.625 2.625-2.625 2.625 1.178 2.625 2.625-1.177 2.625-2.625 2.625zm0-3.75c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125 1.125-.505 1.125-1.125-.505-1.125-1.125-1.125z"}}),_c('path',{attrs:{"d":"M11.974 24.014c-2.25 0-4.455-.641-6.378-1.854a11.92 11.92 0 01-5.302-7.499 12.084 12.084 0 01-.042-5.098 5.606 5.606 0 014.695-7.249C6.999.825 9.434.038 11.996.038s4.997.787 7.049 2.276a5.606 5.606 0 014.696 7.247c1.33 6.376-2.731 12.71-9.094 14.151-.88.201-1.78.302-2.673.302zM1.503 11.723c-.025.88.06 1.753.253 2.607a10.435 10.435 0 004.64 6.562 10.447 10.447 0 007.92 1.359 10.468 10.468 0 008.178-10.533 5.588 5.588 0 01-4.123 1.807A5.63 5.63 0 0112.746 7.9c0-2.425 1.587-4.56 3.824-5.322a10.548 10.548 0 00-4.574-1.039c-1.593 0-3.157.357-4.574 1.039 2.237.762 3.824 2.897 3.824 5.322a5.63 5.63 0 01-5.625 5.625 5.595 5.595 0 01-4.118-1.802zm16.868-7.949a4.13 4.13 0 00-4.125 4.125c0 2.275 1.851 4.125 4.125 4.125s4.125-1.85 4.125-4.125a4.13 4.13 0 00-4.125-4.125zm-12.75 0a4.13 4.13 0 00-4.125 4.125c0 2.275 1.85 4.125 4.125 4.125s4.125-1.85 4.125-4.125a4.13 4.13 0 00-4.125-4.125z"}})])
          )
        }
      }
    