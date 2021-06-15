
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
            children.concat([_c('path',{attrs:{"d":"M.752 12a.75.75 0 01-.75-.75 5.261 5.261 0 013.543-4.965 3.377 3.377 0 01-1.668-2.91C1.877 1.514 3.391 0 5.252 0s3.375 1.514 3.375 3.375a3.379 3.379 0 01-1.669 2.911A5.245 5.245 0 019.14 7.722a.746.746 0 01-.051 1.059.754.754 0 01-1.06-.051A3.757 3.757 0 005.251 7.5c-1.781 0-3.322 1.288-3.673 3h5.705a.75.75 0 010 1.5H.752zm4.5-10.5c-1.034 0-1.875.841-1.875 1.875S4.218 5.25 5.252 5.25s1.875-.841 1.875-1.875S6.286 1.5 5.252 1.5zM18.76 18.752c-1.056 0-2.065-.5-2.699-1.337a.741.741 0 01-.145-.555.74.74 0 01.29-.495.744.744 0 01.452-.152c.233 0 .457.111.598.297a1.892 1.892 0 001.855.708 1.86 1.86 0 001.195-.794c.28-.417.382-.916.286-1.407a1.878 1.878 0 00-2.201-1.481.752.752 0 01-.88-.592.75.75 0 01.592-.88 3.347 3.347 0 012.535.513 3.357 3.357 0 011.428 2.153 3.38 3.38 0 01-3.306 4.022z"}}),_c('path',{attrs:{"d":"M14.252 24a.75.75 0 01-.75-.751 5.257 5.257 0 015.25-5.248 5.258 5.258 0 015.25 5.248c0 .201-.078.389-.22.531s-.33.22-.53.22h-9zm8.174-1.5c-.353-1.71-1.892-2.997-3.672-2.998l-.001-.375v.375c-1.781 0-3.321 1.287-3.674 2.998h7.347zM12.752 17.25a.75.75 0 01-.75-.75v-.353a2.983 2.983 0 01-1.705-1.099.751.751 0 01.597-1.204c.233 0 .457.111.597.296.28.369.708.581 1.174.581l.057-.001c.774 0 1.342-.421 1.342-.797 0-.376-.562-.796-1.313-.796-1.551 0-2.812-1.031-2.812-2.298 0-1.052.849-1.943 2.062-2.213V8.25a.75.75 0 011.5 0v.355a2.979 2.979 0 011.705 1.097.751.751 0 01-.597 1.204.744.744 0 01-.597-.296 1.46 1.46 0 00-1.172-.58l-.059.001c-.774 0-1.342.422-1.342.798 0 .377.561.798 1.312.798 1.551 0 2.813 1.03 2.813 2.296 0 1.052-.85 1.943-2.063 2.212v.365a.749.749 0 01-.749.75zM7.502 23.25a.743.743 0 01-.53-.22l-2.25-2.25a.75.75 0 01-.163-.245l-.009-.024a.738.738 0 010-.523l.012-.032a.75.75 0 01.16-.238l2.25-2.25a.744.744 0 011.06 0 .752.752 0 010 1.061l-.97.97h3.439A.75.75 0 0110.502 21h-3.44l.97.97a.752.752 0 010 1.061.746.746 0 01-.53.219zM16.502 6.75a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l.97-.97h-3.439a.75.75 0 01-.001-1.5h3.439l-.97-.97c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l2.25 2.25a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257L17.032 6.53a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    