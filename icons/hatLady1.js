
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
            children.concat([_c('path',{attrs:{"d":"M12.001 23.742c-6.729 0-12.001-2.635-12.001-6l.002-.052a4.187 4.187 0 011.825-3.187.747.747 0 011.042.196.75.75 0 01-.196 1.042A2.695 2.695 0 001.5 17.767c.034 2.386 4.932 4.475 10.501 4.475 5.568 0 10.466-2.089 10.5-4.475a2.701 2.701 0 00-1.173-2.026.751.751 0 01.423-1.369c.151 0 .298.045.423.131a4.188 4.188 0 011.827 3.24c0 3.363-5.271 5.999-12 5.999z"}}),_c('path',{attrs:{"d":"M18.75 18.492a.75.75 0 01-.75-.75v-1.446c-1.379.907-3.585 1.451-6 1.451s-4.621-.544-6-1.451v1.446a.75.75 0 01-1.5 0v-7.5a7.459 7.459 0 014.167-6.717.747.747 0 011.005.338.752.752 0 01-.338 1.006A5.964 5.964 0 006 10.242v3.755c0 .939 2.283 2.25 6 2.25s6-1.311 6-2.25v-.755a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M14.8 11.235a1.23 1.23 0 01-.625-.167c-.782-.458-.724-1.445-.677-2.237.016-.277.046-.788-.015-.915-.078-.101-.532-.326-.75-.434-.726-.36-1.63-.808-1.63-1.74 0-.931.904-1.379 1.63-1.738.218-.108.671-.333.755-.443.056-.119.026-.631.01-.907-.047-.797-.105-1.786.678-2.239.192-.111.402-.167.625-.167.562 0 1.093.348 1.607.684.243.159.695.455.844.459.149-.004.601-.3.844-.459.514-.336 1.045-.683 1.607-.683.223 0 .434.056.625.167.782.458.724 1.445.677 2.238-.016.277-.046.788.015.915.078.101.531.326.749.434.728.36 1.631.808 1.631 1.739 0 .932-.904 1.379-1.63 1.739-.218.108-.671.332-.755.443-.056.118-.026.631-.01.906.047.797.105 1.786-.678 2.239a1.23 1.23 0 01-.625.167c-.562 0-1.093-.348-1.607-.684-.243-.159-.695-.455-.844-.459-.149.004-.601.3-.844.459-.514.335-1.045.683-1.607.683zm-2.116-5.493c.185.133.541.309.714.395.568.282 1.105.548 1.384 1.029.287.495.249 1.134.213 1.752-.009.161-.03.517-.015.748.194-.101.471-.282.597-.365.538-.352 1.084-.71 1.675-.71.59 0 1.137.358 1.665.704.133.087.409.268.607.369.014-.231-.007-.584-.016-.743-.036-.62-.074-1.26.212-1.755.277-.482.84-.76 1.385-1.03.173-.086.529-.262.714-.395-.185-.133-.54-.309-.713-.394-.544-.27-1.106-.548-1.385-1.031-.286-.495-.249-1.134-.212-1.752.009-.161.03-.516.015-.748-.2.104-.49.294-.606.37-.53.346-1.076.703-1.666.703-.59 0-1.136-.357-1.665-.703a7.369 7.369 0 00-.608-.368c-.014.231.007.583.016.742.036.62.074 1.26-.212 1.755-.277.482-.84.761-1.385 1.031-.173.087-.529.263-.714.396z"}})])
          )
        }
      }
    