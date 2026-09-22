/* ================================================================
   config.js  -  KONFIGURASI FRONT-END
   FORM PRA-KUNJUNGAN IBK  (GitHub Pages)
   ----------------------------------------------------------------
   File ini dibaca oleh index.html DAN klinik.html.
   Kalau URL Web App / alamat klinik / daftar cabang berubah,
   cukup ubah DI SINI saja - tidak perlu mengedit HTML-nya.

   Catatan: file ini beda dengan config.gs.
   - config.js  -> setelan front-end (di GitHub, file ini)
   - config.gs  -> setelan server   (di Apps Script editor)
   ================================================================ */

window.IBK_CONFIG = {

	/* URL Web App Apps Script.
	   Ambil dari: Deploy > Manage deployments > salin "Web app URL".
	   WAJIB diisi - kalau kosong, form tidak bisa dikirim dan
	   halaman klinik tidak bisa membaca data. */
	API_URL: 'https://script.google.com/macros/s/AKfycbykwX6c7yGud_ESkDvUHV4TfWot3_AZZXg9CpMX_r83kOnsjMzi_2VoI8R5X8lZemE/exec',

	/* Alamat halaman klinik. Dipakai Code.gs untuk membuat link WA.
	   Ubah kalau nama repo GitHub berbeda. */
	KLINIK_URL: 'https://mhdcbusdev.github.io/Form-Pra-Kunjungan-IBK/klinik.html',

	/* ------------------------------------------------------------
	   DAFTAR CABANG (nama : nomor WA)
	   ------------------------------------------------------------
	   INI yang muncul di dropdown "Cabang Klinik" pada form.

	   NAMBAH cabang : tambahkan satu baris  'Nama Klinik': 'NomorWA',
	   HAPUS cabang  : hapus barisnya saja.
	   Pastikan tiap baris diakhiri koma, KECUALI baris terakhir.
	   ------------------------------------------------------------ */
	CABANG: {
		'Medikids BSD'          : '08111015531',
		'Medikids Batam'        : '081180115531',
		'Medikids Bekasi'       : '08118905531',
		'Medikids Bintaro'      : '08119135531',
		'Medikids Bogor'        : '08111865531',
		'Medikids Cibinong'     : '08111045531',
		'Medikids Cibubur'      : '08118305531',
		'Medikids Cikarang'     : '081112055531',
		'Medikids Cikupa'       : '08118175531',
		'Medikids Cilegon'      : '08111385531',
		'Medikids Cipondoh'     : '081181185531',
		'Medikids Dago'         : '08118505531',
		'Medikids Depok'        : '08119925531',
		'Medikids Grand Wisata' : '081119755531',
		'Medikids Green Terrace': '08111875531',
		'Medikids JGC'          : '08118125531',
		'Medikids Kalibata City': '08119515531',
		'Medikids Kalimalang'   : '08118065531',
		'Medikids Karawaci'     : '081119915531',
		'Medikids Karawang'     : '08118195531',
		'Medikids Kebon Jeruk'  : '08119465531',
		'Medikids Kemang'       : '08111895531',
		'Medikids Lebak Bulus'  : '081119055531',
		'Medikids Makassar'     : '081181165531',
		'Medikids Malang'       : '081122235531',
		'Medikids Padang'       : '08118675531',
		'Medikids Palembang'    : '08118715531',
		'Medikids Pancoran Mas' : '081188075531',
		'Medikids Pekanbaru'    : '081180125531',
		'Medikids Pondok Indah' : '08119321531',
		'Medikids RSBL'         : '081121915531',
		'Medikids Rawamangun'   : '081119753531',
		'Medikids Rempoa'       : '081119985531',
		'Medikids Sawangan'     : '0811815531',
		'Medikids Semarang'     : '081119705531',
		'Medikids Serpong'      : '081110155531',
		'Medikids Solo'         : '081181245531',
		'Medikids Sunter'       : '081188085531',
		'Medikids Surabaya'     : '08118825531',
		'MHDC Bulog'            : '08111375531',
		'MHDC Menara Sentraya'  : '08118405531',
		'MHDC Wisma 46'         : '08111805531',
		'Medikids Test'         : '085171087351'
	}
};
