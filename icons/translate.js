
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
            children.concat([_c('path',{attrs:{"d":"M12.75 9a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM9.75 9A.75.75 0 019 8.25V6H7.5v2.25a.75.75 0 01-1.5 0V.75a.75.75 0 011.5 0V4.5H9V.75a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM9 24a.75.75 0 01-.75-.75V21h-1.5v2.25a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0v3.75h1.5v-3.75a.75.75 0 011.5 0v7.5A.75.75 0 019 24zM12.75 24a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 0112.75 15c1.24 0 2.25 1.009 2.25 2.25v4.5c0 1.241-1.01 2.25-2.25 2.25zm0-7.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75zM18 24a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75a.75.75 0 010 1.5zM23.25 24a.75.75 0 01-.75-.75V21H21v2.25a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25S24 16.009 24 17.25v6a.75.75 0 01-.75.75zm-.75-4.5v-2.25a.75.75 0 00-1.5 0v2.25h1.5zM20.25 12.75a.733.733 0 01-.278-.054l-3.75-1.5a.745.745 0 01-.411-.401.742.742 0 01-.007-.574.746.746 0 01.974-.417l2.636 1.055a7.423 7.423 0 00-4.02-5.548.747.747 0 01-.33-1.008.748.748 0 011.008-.33 8.996 8.996 0 014.647 5.787l1.137-1.895a.754.754 0 011.03-.258.745.745 0 01.341.461.744.744 0 01-.084.568l-2.25 3.75a.485.485 0 01-.028.04.698.698 0 01-.279.241.74.74 0 01-.167.062.675.675 0 01-.169.021zM4.334 15.75a.748.748 0 01-.629-.34 8.877 8.877 0 01-1.175-2.668l-1.137 1.895a.753.753 0 01-1.029.257.749.749 0 01-.257-1.029l2.25-3.75A.755.755 0 013 9.75c.107 0 .21.023.308.067l3.721 1.488a.752.752 0 01-.278 1.447.74.74 0 01-.279-.054l-2.635-1.054a7.489 7.489 0 001.126 2.947.747.747 0 01-.629 1.159z"}})])
          )
        }
      }
    