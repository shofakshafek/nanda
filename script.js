const introSection = document.getElementById('intro-section');
const trapSection = document.getElementById('trap-section');
const hbdSection = document.getElementById('hbd-section');
const btnYa = document.getElementById('btn-ya');
const btnTidak = document.getElementById('btn-tidak');
const btnKembali = document.getElementById('btn-kembali');
const bgm = document.getElementById('bgm');

// Kalau klik tidak (jebakan)
btnTidak.addEventListener('click', () => {
    introSection.classList.add('hidden');
    trapSection.classList.remove('hidden');
});

// Kalau kembali dari jebakan
btnKembali.addEventListener('click', () => {
    trapSection.classList.add('hidden');
    introSection.classList.remove('hidden');
});

// Kalau klik ya (lanjut ke ucapan HBD)
btnYa.addEventListener('click', () => {
    introSection.classList.add('hidden');
    hbdSection.classList.remove('hidden');
    
    // Play lagu pas masuk halaman HBD
    bgm.play().catch((err) => {
        console.log("Browser memblokir autoplay audio. User harus berinteraksi dulu.");
    });
});

// Fitur Kirim Pesan ke WA Shafiq
const btnWa = document.getElementById('btn-wa');
const inputPesan = document.getElementById('pesan-wa');

btnWa.addEventListener('click', () => {
    const pesan = inputPesan.value;
    
    // Cek kalau pesannya masih kosong
    if (pesan.trim() === '') {
        alert('Isi dulu pesannya bro sebelum dikirim!');
        return;
    }
    
    // Nomor WA lu
    const nomorWA = '6282261195070';
    
    // Format pesan yang bakal masuk ke chat WA
    const teksBawaan = `Halo Shafiq!\n\nMakasih banyak ya web HBD-nya.\nIni kesan & pesan dari gw:\n\n"${pesan}"`;
    const teksWA = encodeURIComponent(teksBawaan);
    
    // Buka tab baru langsung ke chat WA
    const linkWA = `https://wa.me/${nomorWA}?text=${teksWA}`;
    window.open(linkWA, '_blank');
});
