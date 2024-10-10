// Smooth Scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Pengiriman forum
document.getElementById('forum-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const forumNameInput = document.getElementById('forum-name'); // Ambil input nama
    const forumMessageInput = document.getElementById('forum-message');
    const name = forumNameInput.value; // Ambil nilai nama
    const message = forumMessageInput.value;

    // Buat elemen baru untuk pesan
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <p><strong>${name}</strong>: ${message}</p>
        <button class="reply-button">Balas</button>
        <div class="reply-input" style="display: none;">
            <textarea placeholder="Tulis balasan..."></textarea>
            <button class="submit-reply">Kirim Balasan</button>
        </div>
        <div class="replies"></div>
    `;

    // Tambahkan pesan ke forum
    document.getElementById('posts').appendChild(postElement);

    // Reset form setelah pengiriman
    forumNameInput.value = ''; // Reset nama
    forumMessageInput.value = ''; // Reset pesan

    // Tambahkan hasil kirim di dalam forum-results
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-post');
    resultContainer.innerHTML = postElement.innerHTML; // Salin isi postElement
    document.getElementById('forum-results').appendChild(resultContainer); // Tambahkan ke hasil

    // Fungsi untuk menangani balasan
    const replyButton = postElement.querySelector('.reply-button');
    const replyInput = postElement.querySelector('.reply-input');
    const submitReplyButton = postElement.querySelector('.submit-reply');

    replyButton.addEventListener('click', () => {
        replyInput.style.display = replyInput.style.display === 'none' ? 'block' : 'none';
    });

    submitReplyButton.addEventListener('click', (e) => {
        e.preventDefault();
        const replyMessage = replyInput.querySelector('textarea').value;

        if (replyMessage) {
            const replyElement = document.createElement('div');
            replyElement.classList.add('reply');
            replyElement.textContent = `${name} (Balasan): ${replyMessage}`; // Menambahkan nama pada balasan

            // Tambahkan balasan ke pesan
            postElement.querySelector('.replies').appendChild(replyElement);
            replyInput.querySelector('textarea').value = ''; // Hapus input balasan
            replyInput.style.display = 'none'; // Sembunyikan input balasan
        }
    });
});

document.getElementById('forum-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const forumNameInput = document.getElementById('forum-name');
    const forumMessageInput = document.getElementById('forum-message');
    const name = forumNameInput.value;
    const message = forumMessageInput.value;

    // Buat elemen baru untuk pesan
    const postElement = document.createElement('div');
    postElement.innerHTML = `<strong>${name}</strong>: ${message}`;

    // Tambahkan pesan ke forum-results
    document.getElementById('forum-results').appendChild(postElement);

    // Reset form setelah pengiriman
    forumNameInput.value = '';
    forumMessageInput.value = '';
});
