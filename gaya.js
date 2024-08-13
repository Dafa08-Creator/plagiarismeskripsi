document.getElementById('plagiarismForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nama = document.getElementById('nama').value;
    let nim = document.getElementById('nim').value;
    let programStudi = document.getElementById('program_studi').value;
    let konsentrasi = document.getElementById('konsentrasi').value;
    let judul = document.getElementById('judul').value;
    let file = document.getElementById('file').files[0];
    let whatsapp = document.getElementById('whatsapp').value;

    if (file) {
        let result = `
            <h3>Hasil Cek Plagiarisme:</h3>
            <p>Nama: ${nama}</p>
            <p>NIM: ${nim}</p>
            <p>Program Studi: ${programStudi}</p>
            <p>Konsentrasi: ${konsentrasi}</p>
            <p>Judul Skripsi/Thesis: ${judul}</p>
            <p>File: ${file.name}</p>
            <p>Status: File berhasil diunggah. Cek plagiarisme sedang diproses...</p>
        `;
        document.getElementById('result').innerHTML = result;

        // Simulasi proses cek plagiarisme
        setTimeout(() => {
            let similarityScore = Math.floor(Math.random() * 100); // Simulasi skor kemiripan (0-100%)
            let status = similarityScore > 30 ? "Terdeteksi plagiarisme. Mohon revisi skripsi/thesis Anda." : "Tidak terdeteksi plagiarisme. Skripsi/Thesis Anda aman.";

            document.getElementById('result').innerHTML += `<p>Skor Kemiripan: ${similarityScore}%</p>`;
            document.getElementById('result').innerHTML += `<p>Status: ${status}</p>`;

            // Kirim hasil ke WhatsApp (simulasi)
            let whatsappMessage = `Hasil Cek Plagiarisme: \nNama: ${nama}\nNIM: ${nim}\nProgram Studi: ${programStudi}\nKonsentrasi: ${konsentrasi}\nJudul: ${judul}\nSkor Kemiripan: ${similarityScore}%\nStatus: ${status}`;
            window.open(`https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        }, 3000); // Simulasi waktu tunggu 3 detik
    } else {
        document.getElementById('result').innerHTML = `<p>Mohon unggah file skripsi/thesis Anda.</p>`;
    }
});
