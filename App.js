import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'; // react ve react Native bilesenlerinin ice aktarilmasini saglar

export default function App() { // app adinda bir fonksiyonel bilesen tanimlar
  return (
    <View style={styles.container}> {/* uygulamadaki kapsayici alani goruntuluyoruz */}
      <TextInput style={styles.input} placeholder="Email" /> {/* email icin metin kutusu olusturur */}
      <TextInput
        style={styles.input}
        placeholder="Şifre" // sifre girisi icin metin kutusu olusturur
        secureTextEntry={true} // sifreyi * seklinde gizlemek icin yaptik
      />
      <View style={styles.buttonContainer}> {/* giris yap butonu icin */}
        <Button
          title="Giriş Yap" // butonun ustundeki metin giris metni
          onPress={() => {}} // butona bastigimizda calisma sekli (bos biraktim)
          color="#A9A9A9" // buton rengi 
        />
      </View>
      <Text style={{ marginTop: 20 }}>Hesabınız yok mu?</Text> {/* kullaniciyi bilgilendirici metni gosterir */}
      <View style={styles.buttonContainer}> {/* kayit ol butonu icin: */}
        <Button
          title="Kayıt Ol" // butonun ustundeki metin kayit metni
          onPress={() => {}} // butona bastigimizda calisma sekli (bos biraktim)
          color="#A9A9A9" // buton rengi
        />
      </View>
      
      <View style={styles.footer}> {/* alt bilgi goruntuleme icin: */}
        <Image
          source={require('./assets/indir.gif')} // assets klasorunden indirdigimiz gif (sadece minik bi resim olarak gozukuyo en altta)
          style={styles.gif} // gife uygulanan bicim
        />
        <Text style={styles.footerText}>by nbadeturan</Text> {/* alt kisimda gorunen metin */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ // uygulamanin bicimleri tanimlanir
  container: {
    flex: 1, 
    justifyContent: 'center', // dikey eksende ortalamak icin
    alignItems: 'center', // yatay eksende ortalamak icin
    backgroundColor: '#F7E8EF', // arka plan rengini belirlemek icin yaptim 
    padding: 16, // ic kenar bosluklari 16 br
  },
  input: {
    width: '100%', // genislik
    height: 50, // yukseklik (bu kisim UYGULAMANİN EMAİL SİFRE KİSMİNA AİT)
    borderColor: '#ccc', // kenarlik rengi 
    borderWidth: 1, // kenarlik kalinligi
    marginBottom: 16, // alt kenar boslugu
    paddingLeft: 10, // soldan ic bosluk
    borderRadius: 5, // kenarlar yuvarlanir
    backgroundColor: '#fff', // arka plan beyaz renk
    fontWeight: '500', // yazi kalinligi ayarlanmis
  },
  buttonContainer: {
    width: '100%', // tam genislik
    marginVertical: 8, // dikey kenar boslugu
  },
  footer: {
    flexDirection: 'row', // bynbadeturan yazisinin yatayda yerlestirilmesi
    alignItems: 'center', // ortalanmasi 
    marginTop: 20, // ustten boslukk
  },
  gif: {
    width: 24, // gifin genisligi
    height: 24, // gif yuksekligi
    marginRight: 8, // sag kenar boslugu
  },
  footerText: {
    fontSize: 12, // yazi boyutu
    color: '#333', // yazi rengi
  },
});
