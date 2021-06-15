
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
            children.concat([_c('path',{attrs:{"d":"M13.606 19.508c-1.493 0-3.031-.504-4.331-1.418a.75.75 0 01.041-1.253 22.823 22.823 0 007.547-7.547.747.747 0 01.616-.359h.025a.74.74 0 01.613.319c1.988 2.825 1.875 6.43-.268 8.573-1.089 1.087-2.595 1.685-4.243 1.685zm-2.468-2.064a5.839 5.839 0 002.469.566c1.246 0 2.375-.443 3.181-1.248 1.373-1.373 1.624-3.627.682-5.649a24.512 24.512 0 01-6.332 6.331zM6.193 15.377a.743.743 0 01-.53-.22c-.142-.142-.22-.33-.22-.531s.078-.389.22-.53l1.371-1.37H4.602a.75.75 0 010-1.5h4.243c.305 0 .577.182.693.463a.747.747 0 01-.163.817l-2.652 2.651a.744.744 0 01-.53.22zM12.027 9.544a.747.747 0 01-.75-.75V4.551a.75.75 0 011.5 0v2.432l1.371-1.371a.748.748 0 011.28.53c0 .2-.078.389-.22.53l-2.651 2.652a.743.743 0 01-.53.22z"}}),_c('path',{attrs:{"d":"M2.233 18.277a.753.753 0 01-.653-.38 12.042 12.042 0 010-11.837A11.908 11.908 0 018.818.423c1.05-.29 2.128-.436 3.204-.436 2.053 0 4.093.542 5.9 1.568a.746.746 0 01.282 1.023.753.753 0 01-1.024.282 10.48 10.48 0 00-5.16-1.372c-.941 0-1.885.129-2.804.382a10.421 10.421 0 00-6.333 4.932 10.539 10.539 0 000 10.356c.099.174.124.376.071.569a.743.743 0 01-.721.55zM12 23.989a11.91 11.91 0 01-4.37-.83.75.75 0 01.548-1.397c1.227.482 2.513.726 3.822.726h.001c4.29 0 8.223-2.679 9.787-6.665a10.464 10.464 0 000-7.671.747.747 0 01.425-.972.748.748 0 01.971.424 11.967 11.967 0 010 8.767c-1.787 4.557-6.282 7.618-11.184 7.618zM19.817 7.624a.765.765 0 01-.217-.032 8.989 8.989 0 01-2.728-1.364.755.755 0 01-.306-.604c0-.237.114-.463.305-.604A9.017 9.017 0 0119.6 3.656a.755.755 0 01.217-.032c1.103 0 2 .897 2 2s-.897 2-2 2zm-1.088-2c.377.197.771.361 1.176.492a.5.5 0 000-.984 7.569 7.569 0 00-1.176.492zM5.65 21.791c-1.103 0-2-.897-2-2 0-.073.011-.146.032-.217.297-.982.756-1.9 1.364-2.727a.747.747 0 01.604-.297c.242 0 .467.111.604.297a8.989 8.989 0 011.364 2.728c.021.07.032.143.032.217a2.002 2.002 0 01-2 1.999zm-.493-1.911a.5.5 0 00.984 0 7.529 7.529 0 00-.492-1.176c-.196.377-.361.77-.492 1.176z"}})])
          )
        }
      }
    