# Araba Yönetim Uygulaması

Bu proje, React ve Redux'u öğrenmek amacıyla geliştirdiğim bir araba yönetim uygulamasıdır.

## Proje Açıklaması

Bu uygulama, araç eklemeyi, listelemeyi ve kaldırmayı sağlayan iki ana bileşeni içerir: `CarForm` ve `CarList`.

### CarForm.js

`CarForm` bileşeni, kullanıcıdan araç adı ve değerini girmesini isteyen bir form sunar. Form gönderildiğinde, yeni araç bilgileri Redux store'a gönderilir.

### CarList.js

`CarList` bileşeni, Redux store'dan alınan araç listesini görüntüler. Her araç, adı, değeri ve aracı silmek için bir buton içeren bir panelde gösterilir.

## Kullanılan Teknolojiler

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
