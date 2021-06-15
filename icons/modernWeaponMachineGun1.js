
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
            children.concat([_c('path',{attrs:{"d":"M4.729 23.997c-.398 0-.773-.154-1.056-.435L.44 20.325a1.502 1.502 0 01.001-2.121l3.78-3.79.213-2.189c.033-.345.186-.671.433-.917L9.615 6.56a2.249 2.249 0 012.783-.314l2.298-2.298a2.262 2.262 0 011.73-.655l3.222.202.989-.988L19.41 1.28a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53.142-.142.33-.22.531-.22s.389.078.53.22l1.228 1.228L22.722.425a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3.33 3.33-4.701 4.701.189.19 1.303 1.043a5.53 5.53 0 004.187 1.153 1.491 1.491 0 011.659 1.123l.426 1.699a1.503 1.503 0 01-.916 1.763 7.692 7.692 0 01-2.777.517 7.69 7.69 0 01-5.471-2.263l-1.163-1.163-2 2 2.849 3.677a1.502 1.502 0 01-.124 1.979l-.722.722a1.49 1.49 0 01-1.061.439 1.49 1.49 0 01-1.061-.439l-2.93-2.928-2.069 4.138a1.486 1.486 0 01-.278.387 1.489 1.489 0 01-1.058.444h-.005zm-3.228-4.73l3.226 3.229.003-.001 2.292-4.586-2.087-2.086-3.434 3.444zm10.631 1.628l.722-.722-2.733-3.527-1.12 1.12 3.131 3.129zm-4.191-4.189l6.439-6.439-2.644-2.644c-.141-.141-.329-.219-.53-.219s-.389.078-.53.219l-4.749 4.749-.205 2.115 2.219 2.219zm7.473-3.027a6.19 6.19 0 004.41 1.823c.768 0 1.521-.14 2.237-.416l-.427-1.702a6.514 6.514 0 01-.949.068 7.027 7.027 0 01-4.378-1.533l-.811-.649-1.245 1.245 1.163 1.164zm-.723-5.223l3.545-3.545-1.901-.119-.049-.002a.748.748 0 00-.527.22l-2.257 2.256 1.189 1.19z"}})])
          )
        }
      }
    