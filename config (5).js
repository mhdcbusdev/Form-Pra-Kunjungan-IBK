/* ================================================================
   config.js  -  KONFIGURASI FRONT-END
   FORM PRA-KUNJUNGAN IBK  (GitHub Pages)
   ----------------------------------------------------------------
   File ini dibaca oleh index.html DAN klinik.html.
   Kalau URL Web App atau alamat halaman klinik berubah, cukup
   ubah DI SINI saja - tidak perlu mengedit kedua HTML.

   Catatan: file ini beda dengan config.gs.
   - config.js  -> setelan front-end (di GitHub, file ini)
   - config.gs  -> setelan server   (di Apps Script editor)
   ================================================================ */

window.IBK_CONFIG = {

	/* URL Web App Apps Script.
	   Ambil dari: Deploy > Manage deployments > salin "Web app URL".
	   WAJIB diisi - kalau kosong, form tidak bisa dikirim dan
	   halaman klinik tidak bisa membaca data. */
	API_URL: 'https://script.google.com/macros/s/AKfycbwhOMgOujqH85b3sPBAZB-GHUTksMryvIjkx38G1gvA8VyMmAQ7ttuXCIMl9uaqLI6j/exec',

	/* Alamat halaman klinik. Dipakai Code.gs untuk membuat link WA.
	   Ubah kalau nama repo GitHub berbeda. */
	KLINIK_URL: 'https://mhdcbusdev.github.io/Form-Pra-Kunjungan-IBK/klinik.html'
};
