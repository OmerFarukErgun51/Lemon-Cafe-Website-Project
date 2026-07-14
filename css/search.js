const searchIcon = document.getElementById('searchIcon')
const searchEngine = document.getElementById('searchEngine')
const searchInput = searchEngine.querySelector('input')

// Toggle search input visibility
searchIcon.addEventListener('click', () => {
    searchEngine.classList.toggle('active')
    if (searchEngine.classList.contains('active')) {
        searchInput.focus()
    } else {
        // Clear search when closed
        searchInput.value = ''
        searchInput.dispatchEvent(new Event('input'))
    }
})

// Real-time filtering algorithm for gallery items
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim()
    const items = document.querySelectorAll('.portfolio-item')
    
    items.forEach(item => {
        const name = item.getAttribute('data-name') || ''
        if (query === '' || name.includes(query)) {
            item.style.display = 'block'
            // Ensure ScrollReveal inline styles don't conflict with visibility
            item.style.opacity = '1'
            item.style.visibility = 'visible'
        } else {
            item.style.display = 'none'
        }
    })
})