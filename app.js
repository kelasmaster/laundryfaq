// Laundry FAQ - Main Application JavaScript

let currentCategory = 'all';
let currentSearchQuery = '';
let allFaqs = [];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    allFaqs = adminData.getAllFaqs();
    renderFaqs();
    renderFooterCategories();
    setupEventListeners();
    updateAuthSection();
});

// Setup event listeners
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearchQuery = e.target.value.toLowerCase();
            renderFaqs();
        });
    }
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    currentSearchQuery = '';
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Clear search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    renderFaqs();
}

// Filter FAQs based on category and search
function getFilteredFaqs() {
    return allFaqs.filter(faq => {
        const matchesCategory = currentCategory === 'all' || faq.category === currentCategory;
        const matchesSearch = currentSearchQuery === '' ||
            faq.question.toLowerCase().includes(currentSearchQuery) ||
            faq.answer.toLowerCase().includes(currentSearchQuery) ||
            (faq.tags && faq.tags.some(tag => tag.toLowerCase().includes(currentSearchQuery)));
        return matchesCategory && matchesSearch;
    });
}

// Render FAQ items
function renderFaqs() {
    const filteredFaqs = getFilteredFaqs();
    const container = document.getElementById('faqContainer');
    
    if (!container) return;
    
    // Update counters
    document.getElementById('resultCount').textContent = filteredFaqs.length;
    document.getElementById('totalCount').textContent = allFaqs.length;
    
    if (filteredFaqs.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p class="no-results-title">Tidak ada pertanyaan yang cocok</p>
                <p>Coba ubah pencarian atau filter kategori Anda</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredFaqs.map((faq, index) => `
        <div class="faq-item" style="animation-delay: ${index * 50}ms">
            <div class="faq-header" onclick="toggleFaq(this)">
                <div style="flex: 1;">
                    <div class="faq-question">${escapeHtml(faq.question)}</div>
                    ${faq.tags && faq.tags.length > 0 ? `
                        <div class="faq-tags">
                            ${faq.tags.map(tag => `<span class="faq-tag">${escapeHtml(tag)}</span>`).join('')}
                        </div>
                    ` : ''}
                </div>
                <div class="faq-chevron">▼</div>
            </div>
            <div class="faq-content">
                <div class="faq-answer">${escapeHtml(faq.answer)}</div>
            </div>
        </div>
    `).join('');
}

// Toggle FAQ expansion
function toggleFaq(header) {
    const item = header.closest('.faq-item');
    item.classList.toggle('expanded');
}

// Render footer categories
function renderFooterCategories() {
    const footerCategories = document.getElementById('footerCategories');
    if (!footerCategories) return;
    
    footerCategories.innerHTML = categories.map(cat => `
        <li><a href="#" onclick="filterByCategory('${cat.id}'); return false;">${cat.name}</a></li>
    `).join('');
}

// Update auth section
function updateAuthSection() {
    const authSection = document.getElementById('authSection');
    if (!authSection) return;
    
    const user = getLoggedInUser();
    if (user) {
        authSection.innerHTML = `
            <div class="user-info">
                <span class="user-name">${escapeHtml(user.name || user.email)}</span>
                <button class="btn btn-outline btn-small" onclick="logout()">Logout</button>
            </div>
            ${user.role === 'admin' ? `
                <a href="admin.html" class="btn btn-primary btn-small">Admin Panel</a>
            ` : ''}
        `;
    } else {
        authSection.innerHTML = `<button class="btn btn-primary" onclick="window.location.href='login.html'">Login</button>`;
    }
}

// Utility function to escape HTML
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

// Get logged in user from localStorage
function getLoggedInUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

// Logout
function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        localStorage.removeItem('currentUser');
        updateAuthSection();
        window.location.href = 'index.html';
    }
}
