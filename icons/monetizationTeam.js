
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
            children.concat([_c('path',{attrs:{"d":"M11.251 11.25a.75.75 0 01-.75-.75V9h-1.5a.75.75 0 010-1.5h3.155a.589.589 0 00.551-.372.594.594 0 00-.308-.76l-2.621-.815c-.021-.006-.039-.013-.057-.02a2.078 2.078 0 01-1.315-1.949 2.08 2.08 0 01.617-1.477 2.078 2.078 0 011.473-.607h.004V.75a.75.75 0 011.5 0v.75h1.125a.75.75 0 01.001 1.5h-2.625a.593.593 0 00-.595.589.587.587 0 00.351.542l2.622.815a2.083 2.083 0 011.201 1.139c.22.514.228 1.083.02 1.601A2.083 2.083 0 0112.157 9H12v1.5a.75.75 0 01-.749.75zM4.501 21c-1.861 0-3.375-1.514-3.375-3.375S2.64 14.25 4.501 14.25s3.375 1.514 3.375 3.375S6.362 21 4.501 21zm0-5.25c-1.034 0-1.875.841-1.875 1.875S3.467 19.5 4.501 19.5s1.875-.841 1.875-1.875-.841-1.875-1.875-1.875z"}}),_c('path',{attrs:{"d":"M23.251 24a.748.748 0 01-.662-.397 3.476 3.476 0 00-2.069-1.701 3.498 3.498 0 00-1.023-.153 3.504 3.504 0 00-3.083 1.854l-.008.014a.723.723 0 01-.137.175.74.74 0 01-.107.085l-.016.01-.021.014.019-.012a.537.537 0 01-.132.063.578.578 0 01-.07.024.733.733 0 01-.582-.088l-.024-.016a.685.685 0 01-.142-.123.667.667 0 01-.096-.131l-.014-.026a3.474 3.474 0 00-2.065-1.693 3.511 3.511 0 00-1.024-.154c-.567 0-1.135.143-1.642.414A3.487 3.487 0 008.912 23.6l-.021.035a.786.786 0 01-.06.087.504.504 0 01-.05.053.766.766 0 01-.153.12l-.01.007a.757.757 0 01-.345.093l-.024-.375-.002.375-.062-.001a.598.598 0 01-.093-.016.744.744 0 01-.503-.381 3.504 3.504 0 00-6.176.005.75.75 0 11-1.325-.704 4.983 4.983 0 014.4-2.645c1.444 0 2.816.626 3.759 1.695a4.953 4.953 0 012.064-1.403 3.382 3.382 0 01-1.687-2.919 3.379 3.379 0 013.375-3.375 3.379 3.379 0 013.375 3.375 3.38 3.38 0 01-1.686 2.919 4.92 4.92 0 012.06 1.402 4.938 4.938 0 012.063-1.402 3.382 3.382 0 01-1.687-2.919c0-1.861 1.514-3.375 3.375-3.375s3.375 1.514 3.375 3.375a3.38 3.38 0 01-1.686 2.919 4.964 4.964 0 012.723 2.353.75.75 0 01-.66 1.102zm-3.75-8.25c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875zm-7.5 0c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875zM6.376 11.25a.743.743 0 01-.53-.22c-2.98-2.98-2.98-7.83 0-10.811.141-.141.329-.219.53-.219s.389.078.53.22c.142.141.22.33.22.53s-.078.389-.22.53a6.152 6.152 0 000 8.689.744.744 0 010 1.06.741.741 0 01-.53.221zM16.126 11.25a.743.743 0 01-.53-.22.743.743 0 01-.22-.53c0-.2.078-.389.22-.53a6.152 6.152 0 000-8.689.744.744 0 010-1.06.75.75 0 011.06-.001c2.98 2.98 2.98 7.83 0 10.811a.748.748 0 01-.53.219z"}})])
          )
        }
      }
    