// Admin Panel JavaScript

let currentAdminCategory = 'all';
let currentAdminSearchQuery = '';
let editingFaqId = null;
let currentTags = [];

// Initialize admin panel
document.addEventListener('DOMContentLoaded', function() {
    checkAdminAccess();
    initializeAdmin();
});

// Check if user is admin
function checkAdminAccess() {
    const user = localStorage.getItem('currentUser');
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    const userData = JSON.parse(user);
    if (userData.role !== 'admin') {
        alert('Anda tidak memiliki akses ke halaman ini');
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('userName').textContent = userData.name || userData.email;
}

// Initialize admin panel
function initializeAdmin() {
    populateCategorySelect();
    renderAdminFaqs();
    setupAdminEventListeners();
    updateStats();
}

// Setup admin event listeners
function setupAdminEventListeners() {
    const searchInput = document.getElementById('searchFaq');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentAdminSearchQuery = e.target.value.toLowerCase();
            renderAdminFaqs();
        });
    }

    const tagInput = document.getElementById('tagInput');
    if (tagInput) {
        tagInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addTag();
            }
        });
    }
}

// Populate category select
function populateCategorySelect() {
    const select = document.getElementById('faqCategory');
    select.innerHTML = '<option value="">Pilih kategori...</option>' + 
        categories.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('');
}

// Toggle create form
function toggleCreateForm() {
    const section = document.getElementById('createFormSection');
    section.classList.toggle('active');
    if (section.classList.contains('active')) {
        resetForm();
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Cancel form
function cancelForm() {
    document.getElementById('createFormSection').classList.remove('active');
    resetForm();
}

// Reset form
function resetForm() {
    document.getElementById('faqQuestion').value = '';
    document.getElementById('faqAnswer').value = '';
    document.getElementById('faqCategory').value = '';
    document.getElementById('tagInput').value = '';
    currentTags = [];
    editingFaqId = null;
    document.getElementById('formTitle').textContent = 'Buat FAQ Baru';
    document.getElementById('submitBtn').textContent = 'Buat FAQ';
    renderTagList();
}

// Add tag
function addTag() {
    const tagInput = document.getElementById('tagInput');
    const tag = tagInput.value.trim();

    if (!tag) {
        showAlert('Tag tidak boleh kosong', 'warning');
        return;
    }

    if (currentTags.includes(tag)) {
        showAlert('Tag sudah ditambahkan', 'warning');
        return;
    }

    currentTags.push(tag);
    tagInput.value = '';
    renderTagList();
}

// Remove tag
function removeTag(tag) {
    currentTags = currentTags.filter(t => t !== tag);
    renderTagList();
}

// Render tag list
function renderTagList() {
    const tagList = document.getElementById('tagList');
    tagList.innerHTML = currentTags.map(tag => `
        <div class="tag-item">
            ${escapeHtml(tag)}
            <button type="button" onclick="removeTag('${escapeHtml(tag)}')">×</button>
        </div>
    `).join('');
}

// Handle save FAQ
function handleSaveFaq(event) {
    event.preventDefault();

    const question = document.getElementById('faqQuestion').value.trim();
    const answer = document.getElementById('faqAnswer').value.trim();
    const category = document.getElementById('faqCategory').value;

    if (!question || !answer || !category) {
        showAlert('Semua field harus diisi', 'error');
        return;
    }

    const faqData = {
        question,
        answer,
        category,
        tags: currentTags
    };

    try {
        if (editingFaqId) {
            adminData.updateFaq(editingFaqId, faqData);
            showAlert('FAQ berhasil diperbarui', 'success');
        } else {
            adminData.addFaq(faqData);
            showAlert('FAQ berhasil dibuat', 'success');
        }

        resetForm();
        cancelForm();
        renderAdminFaqs();
        updateStats();
    } catch (error) {
        showAlert('Gagal menyimpan FAQ: ' + error.message, 'error');
    }
}

// Edit FAQ
function editFaq(id) {
    const faq = adminData.getFaqById(id);
    if (!faq) return;

    editingFaqId = id;
    document.getElementById('faqQuestion').value = faq.question;
    document.getElementById('faqAnswer').value = faq.answer;
    document.getElementById('faqCategory').value = faq.category;
    currentTags = faq.tags || [];
    renderTagList();

    document.getElementById('formTitle').textContent = 'Edit FAQ';
    document.getElementById('submitBtn').textContent = 'Perbarui FAQ';
    document.getElementById('createFormSection').classList.add('active');
    document.getElementById('createFormSection').scrollIntoView({ behavior: 'smooth' });
}

// Delete FAQ
function deleteFaq(id) {
    if (!confirm('Apakah Anda yakin ingin menghapus FAQ ini?')) return;

    try {
        adminData.deleteFaq(id);
        showAlert('FAQ berhasil dihapus', 'success');
        renderAdminFaqs();
        updateStats();
    } catch (error) {
        showAlert('Gagal menghapus FAQ: ' + error.message, 'error');
    }
}

// Filter by category (admin)
function filterAdminCategory(category) {
    currentAdminCategory = category;

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');

    renderAdminFaqs();
}

// Get filtered FAQs for admin
function getAdminFilteredFaqs() {
    const allFaqs = adminData.getAllFaqs();
    return allFaqs.filter(faq => {
        const matchesCategory = currentAdminCategory === 'all' || faq.category === currentAdminCategory;
        const matchesSearch = currentAdminSearchQuery === '' ||
            faq.question.toLowerCase().includes(currentAdminSearchQuery) ||
            faq.answer.toLowerCase().includes(currentAdminSearchQuery) ||
            (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(currentAdminSearchQuery)));
        return matchesCategory && matchesSearch;
    });
}

// Render admin FAQ list
function renderAdminFaqs() {
    const filteredFaqs = getAdminFilteredFaqs();
    const container = document.getElementById('adminFaqList');

    if (filteredFaqs.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <p>Tidak ada FAQ yang cocok</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredFaqs.map(faq => {
        const categoryName = categories.find(c => c.id === faq.category)?.name || faq.category;
        return `
            <div class="admin-item">
                <div class="admin-item-content">
                    <div class="admin-item-title">${escapeHtml(faq.question)}</div>
                    <div class="admin-item-meta">Kategori: ${escapeHtml(categoryName)}</div>
                    ${faq.tags && faq.tags.length > 0 ? `
                        <div class="admin-item-tags">
                            ${faq.tags.map(tag => `<span class="faq-tag">${escapeHtml(tag)}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="admin-item-actions">
                    <button class="btn btn-outline btn-small" onclick="editFaq(${faq.id})">✏️ Edit</button>
                    <button class="btn btn-danger btn-small" onclick="deleteFaq(${faq.id})">🗑️ Hapus</button>
                </div>
            </div>
        `;
    }).join('');
}

// Update statistics
function updateStats() {
    const allFaqs = adminData.getAllFaqs();
    document.getElementById('totalFaqCount').textContent = allFaqs.length;
    document.getElementById('categoryCount').textContent = categories.length;
}

// Show alert
function showAlert(message, type) {
    const alertContainer = document.getElementById('alertContainer');
    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ',
        warning: '⚠'
    };

    const alertHtml = `
        <div class="alert alert-${type}">
            <span class="alert-icon">${icons[type]}</span>
            <span>${message}</span>
        </div>
    `;

    alertContainer.innerHTML = alertHtml;

    if (type === 'success' || type === 'info') {
        setTimeout(() => {
            alertContainer.innerHTML = '';
        }, 3000);
    }
}

// Escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Logout
function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}
