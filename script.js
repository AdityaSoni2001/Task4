// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Function to fetch trending movies data (simulated data for demonstration)
  function fetchTrendingMovies() {
    // Simulated data (replace with actual API call)
    return new Promise(resolve => {
      setTimeout(() => {
        const movies = [
          { title: '3 Idiots', image: 'movie1.jpg' },
          { title: 'CHHICHHORE', image: 'movie2.jpg' },
          { title: 'M.S.Dhoni - The Untold Story', image: 'movie3.jpg' }
        ];
        resolve(movies);
      }, 1000); // Simulating delay
    });
  }

  // Function to fetch trending series data (simulated data for demonstration)
  function fetchTrendingSeries() {
    // Simulated data (replace with actual API call)
    return new Promise(resolve => {
      setTimeout(() => {
        const series = [
          { title: 'ASPIRANTS', image: 'series1.jpg' },
          { title: 'SCAM 1992', image: 'series2.jpg' },
          { title: 'THE FAMILY MAN', image: 'series3.jpg' }
        ];
        resolve(series);
      }, 1000); // Simulating delay
    });
  }

  // Function to fetch recommended content data (simulated data for demonstration)
  function fetchRecommendedContent() {
    // Simulated data (replace with actual API call)
    return new Promise(resolve => {
      setTimeout(() => {
        const recommended = [
          { title: 'THE KASHMIR FILES', image: 'recommended1.jpg' },
          { title: 'ARTICLE 370', image: 'recommended2.jpg' },
          { title: 'KOTA FACTORY', image: 'recommended3.jpg' }
        ];
        resolve(recommended);
      }, 1000); // Simulating delay
    });
  }

  // Function to create HTML elements for each item
  function createItemElement(item) {
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
    `;
    return div;
  }

  // Function to populate section with data
  async function populateSection(sectionId, fetchDataFunction) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.content');
    
    try {
      const data = await fetchDataFunction();
      data.forEach(item => {
        const itemElement = createItemElement(item);
        content.appendChild(itemElement);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Populate each section with data
  populateSection('trending', fetchTrendingMovies);
  populateSection('series', fetchTrendingSeries);
  populateSection('recommended', fetchRecommendedContent);
});
