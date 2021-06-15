
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
            children.concat([_c('path',{attrs:{"d":"M.75 5.25a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5H.75zM17.239 5.25a.75.75 0 010-1.5h5.993a.75.75 0 010 1.5h-5.993zM.75 10.5a.75.75 0 010-1.5h2.988a.75.75 0 010 1.5H.75zM15.738 10.528a.75.75 0 01-.002-1.5L23.247 9c.415 0 .752.335.753.747a.752.752 0 01-.747.753l-7.513.028h-.002zM.75 15.75a.75.75 0 010-1.5h2.238a.75.75 0 010 1.5H.75zM16.488 15.75a.75.75 0 010-1.5h6.751a.75.75 0 010 1.5h-6.751zM.75 21a.753.753 0 01-.534-1.278.742.742 0 01.529-.223l2.25-.014a.75.75 0 11.009 1.5l-2.252.014H.75zM15 21a.75.75 0 010-1.5h8.239a.75.75 0 010 1.5H15zM8.509 23.999a3.153 3.153 0 01-2.235-.937 3.177 3.177 0 01-.935-2.26.75.75 0 011.5-.002 1.692 1.692 0 001.695 1.7l.071.001.055-.001a1.613 1.613 0 001.13-.51c.297-.316.453-.729.44-1.163a22.517 22.517 0 00-.21-1.75 4.179 4.179 0 01-4.682-4.142c0-2.05 1.06-3.733 3.153-5.007a46.211 46.211 0 01-.215-2.277L8.274 7.6c0-2.947.484-5.083 1.439-6.349C10.532.166 11.471.004 11.958.004c1.175 0 2.036.978 2.362 2.684.473 2.474-.329 6.479-3.063 7.563-.41.163-.793.331-1.142.503.052.36.109.72.169 1.078.224-.06.455-.092.691-.094 1.548 0 2.713 1.374 2.713 3.196a4.182 4.182 0 01-2.221 3.686c.12.716.208 1.429.262 2.125a3.131 3.131 0 01-.845 2.271 3.101 3.101 0 01-2.277.985l-.098-.002zm.212-12.425c-1.281.925-1.882 2.004-1.882 3.36 0 1.475 1.2 2.674 2.674 2.674a2.677 2.677 0 002.674-2.674c0-.983-.508-1.696-1.207-1.696a1.219 1.219 0 00-.638.187c-.28.175-.474.447-.548.768-.074.321-.019.651.155.93a.75.75 0 01-.636 1.147.747.747 0 01-.636-.352 2.715 2.715 0 01-.345-2.063c.099-.43.299-.826.582-1.157a45.412 45.412 0 01-.193-1.124zm1.053-4c.037.535.085 1.076.143 1.614.246-.11.506-.22.786-.331 1.882-.747 2.517-3.933 2.143-5.888-.167-.876-.525-1.465-.888-1.465-1.496 0-2.18 3.144-2.184 6.07z"}})])
          )
        }
      }
    