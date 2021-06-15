
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
            children.concat([_c('path',{attrs:{"d":"M8.363 12a.75.75 0 01-.75-.75V3.311l-1.72 1.72a.744.744 0 01-1.06 0 .747.747 0 010-1.061l2.999-3a.74.74 0 01.531-.22c.089 0 .177.016.261.048l.021.007a.75.75 0 01.249.166l2.999 2.999c.142.141.22.33.22.53s-.078.389-.22.53c-.141.142-.33.22-.53.22s-.389-.078-.53-.22l-1.72-1.72v7.939a.75.75 0 01-.75.751zM15.863 12a.735.735 0 01-.261-.048l-.032-.012a.75.75 0 01-.238-.16l-3-3c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.72 1.72V1.5a.75.75 0 011.5 0v7.939l1.72-1.72a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3 3a.75.75 0 01-.245.163l-.024.009a.7.7 0 01-.26.049zM9.863 23.25a.75.75 0 01-.75-.75v-.75H5.382a.748.748 0 01-.739-.879 9.038 9.038 0 014.888-6.528.747.747 0 01.728.035.745.745 0 01.354.637V22.5a.75.75 0 01-.75.75zm-.75-3v-3.908A7.576 7.576 0 006.33 20.25h2.783zM15.113 23.25c-1.654 0-3-1.346-3-3v-3a3.004 3.004 0 013-3h1.5a.75.75 0 010 1.5h-1.5c-.827 0-1.5.674-1.5 1.5v3c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5h-.75a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75v.75c0 1.654-1.346 3-3 3z"}})])
          )
        }
      }
    