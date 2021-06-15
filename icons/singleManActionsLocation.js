
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
            children.concat([_c('circle',{attrs:{"cx":"18.75","cy":"15.817","r":"1.125"}}),_c('path',{attrs:{"d":"M18.749 23.993a1.489 1.489 0 01-1.182-.577c-1.855-2.374-4.067-5.619-4.067-7.599 0-2.895 2.355-5.25 5.25-5.25S24 12.922 24 15.817c0 1.979-2.212 5.225-4.068 7.6a1.491 1.491 0 01-1.183.576zm.001-11.926a3.754 3.754 0 00-3.75 3.75c0 1.159 1.437 3.717 3.75 6.676 2.313-2.959 3.75-5.517 3.75-6.676a3.754 3.754 0 00-3.75-3.75zM.75 18.005a.75.75 0 01-.75-.749 7.452 7.452 0 012.14-5.252 7.443 7.443 0 015.275-2.249h.087c1.966 0 3.824.76 5.233 2.14.143.14.223.328.225.528a.746.746 0 01-.75.757.747.747 0 01-.525-.214 5.952 5.952 0 00-4.188-1.712H7.43a5.948 5.948 0 00-4.219 1.799 5.959 5.959 0 00-1.712 4.2.75.75 0 01-.749.752c.001 0 .001 0 0 0zM7.5 9.755A4.88 4.88 0 012.625 4.88c0-.839.221-1.669.639-2.404.017-.035.035-.061.046-.077A4.899 4.899 0 017.5.005c2.387 0 4.453 1.777 4.814 4.138a.689.689 0 01.022.153c.026.214.039.405.039.584A4.88 4.88 0 017.5 9.755zM4.23 4.042A3.379 3.379 0 007.5 8.255a3.38 3.38 0 003.339-2.883 7.595 7.595 0 01-6.609-1.33zm4.656.088c.619 0 1.233-.095 1.826-.282A3.397 3.397 0 007.5 1.505c-.987 0-1.922.437-2.561 1.184A6.17 6.17 0 008.874 4.13h.012z"}})])
          )
        }
      }
    