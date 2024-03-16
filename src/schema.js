// yupodaki butun fonksiyonlari import et
import * as yup from "yup";
// validasyon semasi
// formdaki inputlarin gecerli olmasi icin gerekli kosullari
// tanimladigimiz alan

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

// bir alan icin kosullari yazarken ilk olarak o alaninb
// tipini tanimlayan yup fonksiyuonunu cagiririz
export const schema = yup.object().shape({
  //emailin geerli olmai icin kosullar
  email: yup
    .string()
    .email("Email geçerli formatta olmalı")
    .required("Email zorunlu bir alan"),

  // yasin gecerli oolmasi icin kosullar
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz")
    .integer("Lütfen tam sayı değeri giriniz")
    .required("Yaş zorunlu bir alan"),

  //pasword geerli olmai icin kosullar
  password: yup
    .string()
    .min(5, "Şifreniz en az 5 karakter olmalı")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre zorunlu bir alan"),

  //;'fre konntriol gecerli olmai icin kosullar
  passworConfirm: yup
    .string()
    // onOf kontrol ettigimiz inputtaki verinin
    //verdigimiz degerlere esit olup olmadigini kontrol eder
    // ref() farkli bir inputtaki veriye erismenizi saglar
    .oneOf([yup.ref("password")], "Onay sifreniz esle;miyor")
    .required("Lütfen şifrenizi onaylayınız"),
});
