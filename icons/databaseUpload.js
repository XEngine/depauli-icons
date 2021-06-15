
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
            children.concat([_c('path',{attrs:{"d":"M9.675 22.407C3.886 21.932 0 19.861 0 17.251v-12C0 2.258 5.159.001 12 .001s12 2.257 12 5.25v5.228a.75.75 0 01-1.5 0V7.877c-.676.532-1.566 1.002-2.66 1.402a.753.753 0 01-.961-.446.747.747 0 01.447-.962c1.988-.727 3.174-1.706 3.174-2.62 0-1.533-3.739-3.75-10.5-3.75S1.5 3.718 1.5 5.251s3.739 3.75 10.5 3.75a.75.75 0 010 1.5c-4.477 0-8.446-1.016-10.5-2.637v3.387c0 1.259 2.357 2.865 6.861 3.501a.752.752 0 01.638.848.753.753 0 01-.846.638c-2.924-.413-5.24-1.24-6.652-2.363v3.376c0 1.465 3.102 3.235 8.293 3.66.2.016.381.109.511.262.13.153.192.347.176.546a.755.755 0 01-.747.689c-.02.001-.039 0-.059-.001z"}}),_c('path',{attrs:{"d":"M17.25 24.001c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.529 24 17.251s-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M17.25 21.001a.75.75 0 01-.75-.75v-4.189l-.97.97a.744.744 0 01-1.06 0 .752.752 0 010-1.061l2.25-2.25a.74.74 0 01.245-.163l.026-.01a.733.733 0 01.517-.001l.017.006a.748.748 0 01.256.167l2.25 2.25a.752.752 0 01-.53 1.281.743.743 0 01-.53-.22L18 16.062v4.189a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    